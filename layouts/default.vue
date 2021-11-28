<template>
  <div>
    <Nav />
    <div class="placeholder" />
    <nuxt class="main" />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style style="scss">
.nav-container {
  position: fixed;
  z-index: 50;
  width: 100%;
}
.placeholder {
  padding-top: 56px;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
a:hover, a:active, a:focus {
  color: darken(#754ef9, 20);
}
.lila {
  display: inline;
  color: #754ef9 !important;
}
.bg-lila {
  background-color: #754ef9 !important;
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-75:hover {
  opacity: 1;
}
.cursor-pointer {
  cursor: pointer;
}
.text-caption {
  color: rgb(50, 50, 50);
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 400;
}
.block {
  display: block;
}
</style>
