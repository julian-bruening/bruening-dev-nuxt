<template>
  <div class="section-title">
    <h1 class="section-title-title mb-0">
      {{ title }}
    </h1>
    <h2 class="section-title-subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.section-title {
  margin-top: 36px
}
.section-title .section-title-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
  font-size: 35pt;
}
.section-title .section-title-subtitle {
  font-weight: 300;
  color: #0088567e;
  word-spacing: 5px;
  padding-bottom: 15px;
  font-size: 18pt;
}
</style>
