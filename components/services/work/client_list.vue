<template>
  <menu class="client_list">
    <li class="client-aol"><span>AOL Travel</span></li>
    <!-- <li class="client-barclays">Barclays Bank</li> -->
    <li class="client-chelonian client-featured"><nuxt-link to="/work/clarity/">Chelonian Research Institute</nuxt-link></li>
    <li class="client-clarity client-featured"><nuxt-link to="/work/clarity/">Clarity</nuxt-link></li>
    <li class="client-cox"><span>Cox Communications</span></li>
    <li class="client-directv"><span>DirecTV</span></li>
    <li class="client-ebookers"><span>Ebookers</span></li>
    <li class="client-eggbank"><span>Egg Bank</span></li>
    <li class="client-essque"><span>Essque Hotels</span></li>
    <li class="client-expedia"><span>Expedia</span></li>
    <li class="client-explore client-featured"><nuxt-link to="/work/explore/">Explore</nuxt-link></li>
    <li class="client-fordasia"><span>Ford Asia</span></li>
    <li class="client-hgtv"><span>HGTV</span></li>
    <li class="client-huntsman"><span>Hunstman Sciences</span></li>
    <li class="client-ikea"><span>Ikea</span></li>
    <li class="client-lastminute"><span>Lastminute</span></li>
    <li class="client-mhe"><span>McGraw Hill Education</span></li>
    <li class="client-nashville"><span>Nashville Airport</span></li>
    <li class="client-nike"><span>Nike ACG</span></li>
    <li class="client-otg"><span>Online Travel Group</span></li>
    <li class="client-ovation"><span>Ovation</span></li>
    <li class="client-snow"><span>Snow.com</span></li>
    <li class="client-shangrila"><span>Shangri-La Hotels</span></li>
    <li class="client-street"><span>StreetAttack</span></li>
    <li class="client-tiara"><span>Tiara Hotels and Resorts</span></li>
    <li class="client-ucla client-featured"><nuxt-link to="/work/ucla/">UCLA School of English</nuxt-link></li>
    <li class="client-vonholz client-featured"><nuxt-link to="/work/vonholzhausen/">Vonholzhausen</nuxt-link></li>
  </menu>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables/colors';
@import '~assets/scss/variables/type';
.client_logos {
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-template-rows: auto;
    grid-gap: 2rem;
    li {
      display: flex;
      height: 10rem;
      justify-content: center;
      align-items: flex-end;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 5rem auto;
      background-color: $color-base-2;
      transition: 0.5s all; // animates when breakpoint hit

      a {
        // display: flex;
        // width: 100%;
        // height: 100%;
        text-decoration: none;
      }
      span {
        display: none;
        color: $color-base-4;
        transition: 0.5s all; // animates when breakpoint hit
      }
      span {
        padding: 0 0 0.5rem;
      }
      &:hover {
        span,a {
          display: flex;
        }
      }
    }
    .client-aol         { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-cox         { background-image: url(~assets/images/client-logos/logo-cox@2x.png); }
    .client-directv     { background-image: url(~assets/images/client-logos/logo-directv@2x.png); }
    .client-ebookers    { background-image: url(~assets/images/client-logos/logo-ebookers@2x.png); }
    .client-eggbank     { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-essque      { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-expedia     { background-image: url(~assets/images/client-logos/logo-expedia@2x.png); }
    .client-fordasia    { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-hgtv        { background-image: url(~assets/images/client-logos/logo-hgtv@2x.png); }
    .client-huntsman    { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-ikea        { background-image: url(~assets/images/client-logos/logo-ikea@2x.png); }
    .client-lastminute  { background-image: url(~assets/images/client-logos/logo-last@2x.png); }
    .client-mhe         { background-image: url(~assets/images/client-logos/logo-mhe@2x.png); }
    .client-nashville   { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-nike        { background-image: url(~assets/images/client-logos/logo-nacg@2x.png); }
    .client-otg         { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-ovation     { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-snow        { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-shangrila   { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-street      { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-tiara       { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-ucla        { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
    .client-vonholz     { background-image: url(~assets/images/client-logos/logo-aol@2x.png); }
  }
  &.hide_active {
    .client-featured {
      display: none;
    }
  }
}


.client-featured {

}
.client-casestudy {}

.client_list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  a {
    // display: block;
    // background: red;
    margin: 0 0 0.5rem;
  }
}
</style>
