<template>
  <!--
    Note: This is not a typical Nuxt template
    It is just a custom vue component with a slot (https://vuejs.org/v2/guide/components-slots.html)
    I prefer components with slots over Nuxt's layouts becaise custom components are more versatile"
      - they support passing of props
      - they can be chained (you can make nested layouts)
    Check out his answer: https://stackoverflow.com/a/62035321/8677167
  -->
  <b-container class="bv-example-row content my-3">
    <main>
      <!-- only posts have the back button -->
      <ElementBackButton v-if="backLink" :back-link="backLink" />

      <!-- page does not have to have a title -->
      <h1 v-if="title">
        {{ title }}
      </h1>

      <!-- not all pages have dates, only posts do -->
      <div v-if="date" class="date">
        {{ $t('lastupdated') }}
        <b>{{ dateDisplay }}</b>
      </div>

      <slot />
    </main>
  </b-container>
</template>
<i18n>
{
  "en": {
    "lastupdated": "Last updated"
  },
  "de": {
    "lastupdated": "Zuletzt aktualisiert"
  }
}
</i18n>

<script>
export default {
  props: {
    title: {
      type: String,
      default: undefined
    },
    backLink: {
      type: String,
      default: undefined
    },
    date: {
      type: String,
      default: undefined
    }
  },
  computed: {
    dateDisplay () {
      // convert the long date to an easy to read date
      const date = new Date(this.date)
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    }
  }
}
</script>

<style>

main {
  margin: 1em var(--side-padding);
}
main .date {
  font-size: 0.9em;
  color: #777;
}
</style>
