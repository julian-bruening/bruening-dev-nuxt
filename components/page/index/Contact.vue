<template>
  <div class="about">
    <ElementSectionTitle :title="$t('contact')" :subtitle="$t('interested')" />
    <p>
      Mail: <a href="mailto:julian@bruening.dev">julian@bruening.dev</a><br>
      Tel.: <a href="tel:4915756016634">+49 157 56016634</a>
    </p>
  </div>
</template>
<i18n>
{
  "en": {
    "contact": "Contact",
    "interested": "Interested?"
  },
  "de": {
    "contact": "Kontakt",
    "interested": "Interessiert?"
  }
}
</i18n>
<script>
// import sectionTitle from '~/components/Section_Title.vue'

export default {
}
</script>

<style>
p {
  line-height: 30px
}
</style>
