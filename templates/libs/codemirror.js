import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {python} from "@codemirror/lang-python"
import {markdown} from "@codemirror/lang-markdown"

export default function CodeMirror (dom) {
  return new EditorView({
    state: EditorState.create({
      extensions: [basicSetup, python(), markdown()]
    }),
    parent: dom
  })
}
