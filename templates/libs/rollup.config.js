import {nodeResolve} from "@rollup/plugin-node-resolve"
import {terser} from "rollup-plugin-terser"

import pkg from '../../package.json'

export default [{
  input: "./templates/libs/codemirror.js",
  output: {
    file: `./static/libs/${pkg.codemirror}`,
    format: "umd",
    name: 'CodeMirror'
  },
  plugins: [
    nodeResolve(),
    terser()
  ]
}]
