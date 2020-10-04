const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'PetShop',
    },
  },
  devServer: {
    port: 3001,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/helpers/variables.scss";
          @import "~@/assets/scss/helpers/mixins.scss";
          @import "~@/assets/scss/helpers/functions.scss";
        `,
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/about', '/news', '/coupon', '/adopt', '/contact', '/signin'],
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true,
            minifyCSS: true,
          },
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
            headless: true,
          }),
        }),
      );
    }
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@img'] = '@/assets/img';
  },
  pwa: {
    name: 'PetShop',
    themeColor: '#4bb36e',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
