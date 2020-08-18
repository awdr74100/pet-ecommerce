module.exports = {
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
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '@/assets/img',
      },
    },
  },
};
