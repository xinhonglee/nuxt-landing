import anime from "animejs";

// export function testBind(element) {
//
//   var testItem = document.querySelector('.logotype a');
//
//   function animateButton(scale, duration, elasticity) {
//     anime.remove(testItem);
//     anime({
//       targets: testItem,
//       scale: scale,
//       duration: duration,
//       elasticity: elasticity
//     });
//   }
//
//   function enterButton() { animateButton(1.2, 400, 400) };
//   function leaveButton() { animateButton(1.0, 300, 300) };
//
//   testItem.addEventListener('mouseenter', enterButton, false);
//   testItem.addEventListener('mouseleave', leaveButton, false);
//
// }

export function paintCommon(element) {

  // document.addEventListener('DOMContentLoaded', () => {

    var initTimeline = anime.timeline();

    initTimeline
      .add({
        targets: 'header .logotype',
        opacity: 1,
        easing: 'easeOutQuad',
        translateY: [
          { value: 40, duration: 700 }
        ],
        duration: 700,
        loop: false,
        delay: 200
      })
      .add({
        targets: 'header .navigation',
        opacity: 1,
        easing: 'easeOutQuad',
        translateY: [
          { value: 40, duration: 700 }
        ],
        duration: 700,
        loop: false
      }, '-=400')
      .add({
        targets: 'header .content',
        opacity: 1,
        easing: 'easeOutQuad',
        translateY: [
          { value: 40, duration: 700 }
        ],
        duration: 700,
        loop: false
      }, '-=400')
      .add({
        targets: 'main',
        opacity: 1,
        easing: 'easeInOutQuad',
        translateY: [
          { value: 40, duration: 1700 }
        ],
        duration: 1700,
        loop: false
      }, '-=1400')
      .add({
        targets: '.headline h1',
        opacity: 1,
        easing: 'easeInOutQuad',
        translateX: [
          { value: 40, duration: 1000 }
        ],
        duration: 1000,
        loop: false
      }, '-=1200')
      .add({
        targets: 'footer',
        opacity: 1,
        easing: 'easeInOutQuad',
        translateY: [
          { value: 40, duration: 700 }
        ],
        duration: 700,
        loop: false
      }, '-=400')
    ;

  // })

}

export function paintHome(element) {

  var initTimeline = anime.timeline();

  initTimeline
    .add({
      targets: 'header .logotype',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    })
    .add({
      targets: 'header .navigation',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
    .add({
      targets: 'header .meta',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
    .add({
      targets: 'header .content',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
    .add({
      targets: 'header .mouse',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
    .add({
      targets: 'main',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
    .add({
      targets: 'footer',
      opacity: 1,
      easing: 'easeInOutQuad',
      translateY: [
        { value: 40, duration: 700 }
      ],
      duration: 700,
      loop: false
    }, '-=400')
  ;

}



// TYPES OF DOM EVENTS FOR LISTENERS

// mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
// touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel
// keyboard events (KeyboardEvent): keydown, keypress, keyup
// form events: focus, blur, change, submit
// window events: scroll, resize, hashchange, load, unload

// INITIALIZATION TIMELINE


// end of DOM loaded check
