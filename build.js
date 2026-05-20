const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const fs = require('fs')

const input = fs.readFileSync('./src/input.css', 'utf8')

postcss([tailwindcss, require('autoprefixer')])
  .process(input, { from: './src/input.css', to: './src/output.css' })
  .then(result => {
    fs.writeFileSync('./src/output.css', result.css)
    console.log('Build successful')
  })