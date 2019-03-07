<template>
  <menu class="client_list">
    <li class="client-aol">AOL Travel</li>
    <!-- <li class="client-barclays">Barclays Bank</li> -->
    <li class="client-chelonian client-featured"><nuxt-link to="/work/clarity/">Chelonian Research Institute</nuxt-link></li>
    <li class="client-clarity client-featured"><nuxt-link to="/work/clarity/">Clarity</nuxt-link></li>
    <li class="client-cox">Cox Communications</li>
    <li class="client-directv">DirecTV</li>
    <li class="client-eggbank">Egg Bank</li>
    <li class="client-essque">Essque Hotels</li>
    <li class="client-expedia">Expedia</li>
    <li class="client-explore client-featured"><nuxt-link to="/work/explore/">Explore</nuxt-link></li>
    <li class="client-fordasia">Ford Asia</li>
    <li class="client-hgtv">HGTV</li>
    <li class="client-huntsman">Hunstman Sciences</li>
    <li class="client-ikea">Ikea</li>
    <li class="client-lastminute">Lastminute</li>
    <li class="client-mhe">McGraw Hill Education</li>
    <li class="client-nashville">Nashville Airport</li>
    <li class="client-nike">Nike ACG</li>
    <li class="client-otg">Online Travel Group</li>
    <li class="client-ovation">Ovation</li>
    <li class="client-snow">Snow.com</li>
    <li class="client-shangrila">Shangri-La Hotels</li>
    <li class="client-street">StreetAttack</li>
    <li class="client-tiara">Tiara Hotels and Resorts</li>
    <li class="client-ucla client-featured"><nuxt-link to="/work/ucla/">UCLA School of English</nuxt-link></li>
    <li class="client-vonholz client-featured"><nuxt-link to="/work/vonholzhausen/">Vonholzhausen</nuxt-link></li>
  </menu>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
// .client-aol         { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-cox         { background-image: url(~assets/images/client-logos/logo-cox.png); }
// .client-directv     { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-ebookers    { background-image: url(~assets/images/client-logos/logo-ebookers.png); }
// .client-eggbank     { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-essque      { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-expedia     { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-fordasia    { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-hgtv        { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-huntsman    { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-ikea        { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-lastminute  { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-nashville   { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-nike        { background-image: url(~assets/images/client-logos/logo-nacg.png); }
// .client-otg         { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-ovation     { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-snow        { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-shangrila   { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-street      { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-tiara       { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-ucla        { background-image: url(~assets/images/client-logos/logo-aol.png); }
// .client-vonholz     { background-image: url(~assets/images/client-logos/logo-aol.png); }

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
