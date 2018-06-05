class HtmlWebpackExcludeScriptPlugin {
  apply (compiler) {
    compiler.plugin('compilation', (compilation) => {
      console.log('compilation from html-webpack-exclude-script-plugin')
      compilation.plugin('html-webpack-plugin-before-html-processing', (data, cb) => {
        let html = data.html
        console.log(html)
        data.html = html.replace(/<script.*><\/script>/g, '')
        cb(null, data)
      })
    })
  }
}

module.exports = HtmlWebpackExcludeScriptPlugin
