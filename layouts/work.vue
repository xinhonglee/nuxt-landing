<template>
  <div>
    <headerPart/>
    <nuxt/>
    <div class="grid">
      <div class="grid__item theme-1">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="https://tympanus.net/Development/GridMenu/" class="grid__item-link">&larr; Previous Demo</a>
            <a href="https://tympanus.net/codrops/?p=34430" class="grid__item-link">Article</a>
            <!--a href="" class="grid__item-link">GitHub</a-->
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Distortion Hover Effect</h2>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-2">
        <div class="grid__item-img" data-displacement="img/displacement/8.jpg" data-intensity="-0.65" data-speedIn="1.2" data-speedOut="1.2">
          <img src="img/Img22.jpg" alt="Image"/>
          <img src="img/Img21.jpg" alt="Image"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">California</span>
          <h2 class="grid__item-title">Jumping Around</h2>
          <h3 class="grid__item-subtitle">
            <span>California's last empty jump spots</span>
            <a class="grid__item-link" href="#">Discover more</a>
          </h3>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-3">
        <div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2" data-speedIn="1.6" data-speedOut="1.6">
          <img src="img/Img23.jpg" alt="Image"/>
          <img src="img/Img24.jpg" alt="Image"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Italy</span>
          <h2 class="grid__item-title">Calm Serenity</h2>
          <h3 class="grid__item-subtitle">
            <span>Italy's secret meadows and fields</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item theme-4">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">About</a>
            <a href="#" class="grid__item-link">Blog</a>
            <a href="#" class="grid__item-link">Membership</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Qualm Inspiration for Everybody</h2>
          <p class="grid__item-text">Muse about, something incredible is waiting to be known, courage of our questions tesseract hearts of the stars great turbulent clouds the only home.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item theme-5">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Getting there</a>
            <a href="#" class="grid__item-link">Accomodation</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Bangkok's Hidden Foodstalls</h2>
          <p class="grid__item-text">Tingling of the spine, network of wormholes preserve and cherish that pale blue dot cosmic ocean encyclopaedia galactica.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-6">
        <div class="grid__item-img" data-displacement="img/displacement/1.jpg" data-intensity="-0.4" data-speedIn="0.7" data-speedOut="0.3" data-easing="Sine.easeOut">
          <img src="img/Img1.jpg" alt="Image"/>
          <img src="img/Img13.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Sweden</span>
          <h2 class="grid__item-title">Build it forever</h2>
          <h3 class="grid__item-subtitle">
            <span>Sweden's famous furniture</span>
            <a class="grid__item-link" href="#">Discover more</a>
          </h3>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-7">
        <div class="grid__item-img" data-displacement="img/displacement/7.jpg" data-intensity="0.9" data-speedIn="0.8" data-speedOut="0.4" data-easing="Circ.easeOut">
          <img src="img/Img19.jpg" alt="Image"/>
          <img src="img/Img20.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Spain</span>
          <h2 class="grid__item-title">Water Wonders</h2>
          <h3 class="grid__item-subtitle">
            <span>Spain's amazingly colorful lakes</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item theme-8">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Morocco FAQ</a>
            <a href="#" class="grid__item-link">Insider Tips</a>
            <a href="#" class="grid__item-link">Hotels</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">The Rise of Moroccan Reggae</h2>
          <p class="grid__item-text">Concept of the number one two ghostly white figures in coveralls and helmets are soflty dancing.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item theme-9">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Uzbekistan Today</a>
            <a href="#" class="grid__item-link">History</a>
            <a href="#" class="grid__item-link">Culture</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Stories from Landlocked Lands</h2>
          <p class="grid__item-text">Drake Equation science Hypatia the ash of stellar alchemy. Circumnavigated gathered by gravity.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-10">
        <div class="grid__item-img" data-displacement="img/displacement/10.jpg" data-intensity="0.7" data-speedIn="1" data-speedOut="0.5" data-easing="Power2.easeOut">
          <img src="img/Img2.jpg" alt="Image"/>
          <img src="img/Img3.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Germany</span>
          <h2 class="grid__item-title">Holy House</h2>
          <h3 class="grid__item-subtitle">
            <span>Germany's amazing architecture</span>
            <a class="grid__item-link" href="#">Check it out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-11">
        <div class="grid__item-img" data-displacement="img/displacement/6.jpg" data-intensity="0.6" data-speedIn="1.2" data-speedOut="0.5">
          <img src="img/Img5.jpg" alt="Image"/>
          <img src="img/Img4.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Denmark</span>
          <h2 class="grid__item-title">Future Proof</h2>
          <h3 class="grid__item-subtitle">
            <span>Building for the future</span>
            <a class="grid__item-link" href="#">Learn more</a>
          </h3>
        </div>
      </div>
      <div class="grid__item theme-12">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Wiki</a>
            <a href="#" class="grid__item-link">History</a>
            <a href="#" class="grid__item-link">Culture</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">China's Last Wild Bears</h2>
          <p class="grid__item-text">Descended from astronomers emerged into consciousness? Encyclopaedia galactica. Extraordinary claims require extraordinary.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>

      <div class="grid__item theme-13">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">FAQ</a>
            <a href="#" class="grid__item-link">Quiz</a>
            <a href="#" class="grid__item-link">Getting There</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Travel Tips for South Africa</h2>
          <p class="grid__item-text">Venture something incredible is waiting to be known Orion's sword white dwarf rogue tendrils of gossamer.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-14">
        <div class="grid__item-img" data-displacement="img/displacement/11.jpg" data-intensity="0.4" data-speedIn="1" data-speedOut="1">
          <img src="img/Img10.jpg" alt="Image"/>
          <img src="img/Img6.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Florida</span>
          <h2 class="grid__item-title">Cool and Fresh</h2>
          <h3 class="grid__item-subtitle">
            <span>Discover Florida's best beaches</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-15">
        <div class="grid__item-img" data-displacement="img/displacement/2.jpg" data-intensity="0.6" data-speedIn="1" data-speedOut="1">
          <img src="img/Img11.jpg" alt="Image"/>
          <img src="img/Img18.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Europe</span>
          <h2 class="grid__item-title">My Cup of Coffee</h2>
          <h3 class="grid__item-subtitle">
            <span>The best coffe houses in Europe</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item theme-16">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">About</a>
            <a href="#" class="grid__item-link">History</a>
            <a href="#" class="grid__item-link">Culture</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Cold Winters and Warm Hearts</h2>
          <p class="grid__item-text">Drake Equation science Hypatia the ash of stellar alchemy. Circumnavigated gathered.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item theme-17">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Getting There</a>
            <a href="#" class="grid__item-link">Festivals</a>
            <a href="#" class="grid__item-link">Trips</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">Polka Dots Everywhere</h2>
          <p class="grid__item-text">Quasar billions upon billions rich in heavy atoms the only home we've ever known Cambrian explosion cosmic fugue? Galaxies, at the edge of forever.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-18">
        <div class="grid__item-img" data-displacement="img/displacement/15.jpg" data-intensity="-0.1" data-speedIn="0.4" data-speedOut="0.4" data-easing="power2.easeInOut">
          <img src="img/Img7.jpg" alt="Image"/>
          <img src="img/Img14.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Bulgaria</span>
          <h2 class="grid__item-title">Doors and Rooftops</h2>
          <h3 class="grid__item-subtitle">
            <span>Experience fantastic buildings</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-19">
        <div class="grid__item-img" data-displacement="img/displacement/13.jpg" data-intensity="0.2">
          <img src="img/Img8.jpg" alt="Image"/>
          <img src="img/Img15.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">France</span>
          <h2 class="grid__item-title">French Geometry</h2>
          <h3 class="grid__item-subtitle">
            <span>France's geometric wonders</span>
            <a class="grid__item-link" href="#">Check them out</a>
          </h3>
        </div>
      </div>
      <div class="grid__item theme-20">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Wiki</a>
            <a href="#" class="grid__item-link">History</a>
            <a href="#" class="grid__item-link">Culture</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">What Rudolf Steiner Envisioned</h2>
          <p class="grid__item-text">Drake Equation science Hypatia the ash of stellar alchemy. Circumnavigated gathered.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item theme-21">
        <div class="grid__item-content">
          <nav class="grid__item-nav">
            <a href="#" class="grid__item-link">Travel Guide</a>
            <a href="#" class="grid__item-link">Tips</a>
            <a href="#" class="grid__item-link">Flights</a>
          </nav>
          <h2 class="grid__item-title grid__item-title--small">More on Dracula's Heritage</h2>
          <p class="grid__item-text">Emerged into consciousness extraplanetary, a still more glorious dawn awaits, Orion's sword network of wormholes vanquish the impossible the sky.</p>
          <a href="#" class="grid__item-link">Read more</a>
        </div>
      </div>
      <div class="grid__item grid__item--bg theme-22">
        <div class="grid__item-img" data-displacement="img/displacement/8.jpg" data-intensity="-0.8">
          <img src="img/Img26.jpg" alt="Image"/>
          <img src="img/Img25.jpg" alt="Image Alt"/>
        </div>
        <div class="grid__item-content">
          <span class="grid__item-meta">Dublin</span>
          <h2 class="grid__item-title">Facades and Bikes</h2>
          <h3 class="grid__item-subtitle">
            <span>The parking habits of the Irish</span>
            <a class="grid__item-link" href="#">Read more</a>
          </h3>
        </div>
      </div>
    </div>
    <footerPart/>
  </div>
</template>

<script>
import headerPart from '~/components/header.vue'
import footerPart from '~/components/footer.vue'
export default {
  components: {
    headerPart,
    footerPart
  }

}
</script>

<style lang="scss" scoped>
</style>
