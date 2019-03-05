import anime from "animejs";

export function paintCommon(element) {

  // document.addEventListener('DOMContentLoaded', () => {

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
