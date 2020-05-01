const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 可 @import '~...'
        javascriptEnabled: true,
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
  },

  devServer: {
    // host: 'localhost',
		// host: "test.360.cn",
		port: 8080, // 端口号
  }
}
