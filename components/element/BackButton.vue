<template>
  <div>
    <nuxt-link :to="backLink">
      &lt; {{ $t('back') }}
    </nuxt-link>
  </div>
</template>

<i18n>
{
  "en": {
    "back": "Back"
  },
  "de": {
    "back": "Zurück"
  }
}
</i18n>

<script>
export default {
  props: {
    backLink: {
      type: String,
      default: undefined
    }
  }
}
</script>