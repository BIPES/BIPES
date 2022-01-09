import {nodeResolve} from "@rollup/plugin-node-resolve"
import {terser} from "rollup-plugin-terser"

export default [{
  input: "./templates/libs/codemirror.js",
  output: {
    file: `./static/libs/codemirror.umd.js`,
    format: "umd",
    name: 'CodeMirror'
  },
  plugins: [
    nodeResolve(),
    terser()
  ]
}]

