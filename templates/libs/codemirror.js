import { EditorState, EditorView, genericImports } from "./codemirror-generic.js"
import { keymap } from "@codemirror/view"
import { indentWithTab } from "@codemirror/commands"
import { indentUnit } from "@codemirror/language"
import { python } from "@codemirror/lang-python"
import { markdown } from "@codemirror/lang-markdown"
import { oneDark } from "@codemirror/theme-one-dark"


let setTheme = (theme) => {
  if (theme == 'dark')
    return [oneDark]
  else
    return []
}

export default function CodeMirror6 (dom, theme, props){
  let _props = []
  if (props instanceof Object){
    for (const key in props){
      switch (key){
        case 'contenteditable':
          _props.push(EditorView.contentAttributes.of({ contenteditable: props[key] }))
          break
      }
    }
  }
  return new EditorView({
    state: EditorState.create({
      extensions: [
        ..._props,
        genericImports,
        keymap.of([indentWithTab]),
        indentUnit.of('\t'),
        python(),
        markdown(),
        setTheme(theme)
      ]
    }),
    parent: dom
  })
}
