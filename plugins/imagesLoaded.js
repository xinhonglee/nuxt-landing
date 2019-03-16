/* eslint-disable */
export default ({app}) => {
  if (process.browser) {
    /**
     *  Every time the route changes (fired on initialization too)
     */
    app.router.afterEach((to, from) => {

      console.log(`initialize images on ${to.fullPath}`);
      let imgLoad = imagesLoaded('#main');
      imgLoad.on('always', function () {
        console.log(imgLoad.images.length + ' images loaded');
      });
    })
  }
}
