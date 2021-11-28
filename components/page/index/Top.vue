<template>
  <div class="top">
    <PageIndexProfilePic />
    <h1 class="title">
      Julian Brüning
    </h1>
    <h2>
      Full Stack
      <span class="lila">App-</span> &
      <span class="lila">Web{{ $t('developer') }}</span>
    </h2>
  </div>
</template>
<script>
export default {
}
</script>

<i18n>
{
  "en": {
    "developer": "developer"
  },
  "de": {
    "developer": "entwickler"
  }
}
</i18n>
<style>
.top {
  width: 100%;
  padding: 48px;
  background-color: #f9f9f9;
  border-bottom: solid 1px rgba(#000, 0.08);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top .profilePic {
  border: solid 1px lightgray;
  border-radius: 100%;
  padding: 12px;
  width: 120px;
  box-sizing: content-box;
  background-color: white;
}
.top .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}
.top .subtitle{
  font-weight: 300;
  color: #5264887e;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
