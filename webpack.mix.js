const mix = require('laravel-mix')

// 以下を追加
if (!mix.inProduction()) {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/
        }
      ]
    }
  })
}
// ここまで

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');