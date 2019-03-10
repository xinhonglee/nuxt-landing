export function stickyHeader(element) {






  const nav = document.querySelector('header');
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);

    if (window.scrollY >= navTop) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('sticky_nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('sticky_nav');
    }
  }
  window.addEventListener('scroll', stickyNavigation);




}
