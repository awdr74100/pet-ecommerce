module.exports = {
  devServer: {
    port: 3001,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '@/assets/img',
      },
    },
  },
};
