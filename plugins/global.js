if (process.browser) {
  window.animejs = require("animejs");
  window.imagesLoaded = require("imagesloaded");
  imagesLoaded( '#main', function() {
    console.log('all images are loaded');
  });
}
