import {terser} from "rollup-plugin-terser"

export default [{
  input: "./templates/libs/bipes.temp.js",
  output: {
    file: `./static/libs/bipes.umd.js`,
    format: "umd",
    name: 'Bipes'
  },
  plugins: [
    terser()
  ]
}]
