/* eslint-disable */
export default ({app}) => {
  if (process.browser) {
    /**
     *  Every time the route changes (fired on initialization too)
     */
    app.router.afterEach((to, from) => {
      console.log(`initialize images on ${to.fullPath}`);
      setTimeout(() => {
        const imgLoad = imagesLoaded('#main');
        imgLoad.on('always', function () {
          console.log(imgLoad.images.length + ' images loaded');
        })
        .on('done', function (instance) {
          console.log('all images successfully loaded');
        })
        .on('fail', function () {
          console.log('all images loaded, at least one is broken');
        })
      }, 100);
    })
  }
}
