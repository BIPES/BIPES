import {EditorState, basicSetup} from "@codemirror/basic-setup"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {python} from "@codemirror/lang-python"
import {markdown} from "@codemirror/lang-markdown"
import {oneDark} from "@codemirror/theme-one-dark"

export default function CodeMirror (dom){
  return new EditorView({
    state: EditorState.create({
      indentUnit: '\t',
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        python(),
        markdown(),
        oneDark
      ]
    }),
    parent: dom
  })
}
