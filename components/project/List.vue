<template>
  <div>
    <ElementSectionTitle
      :title="$t('title')"
      :subtitle="$t('subtitle')"
    />
    <ProjectFilter
      class="mt-3"
    />
    <div class="mt-1 mb-4">
      Ergebnisse: {{ projects.length }}
    </div>
    <div v-for="p in projects" :key="p.slug">
      <ProjectSnippet
        :p="p"
        :filter="filter"
        class="py-4"
      />
      <hr>
    </div>
    <div v-if="projects.length == 0" class="mt-5 mb-5 pb-5">
      Keine Ergebnisse gefunden :(
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "title": "Projects",
    "subtitle": "Carefully selected projects, glutenfree. I promise"
  },
  "de": {
    "title": "Projekte",
    "subtitle": "Sorgsam ausgewählte Projekte, glutenfrei. Versprochen"
  }
}
</i18n>
<script>
export default {
  computed: {
    projects () {
      return this.$store.state.projects.filteredList
    },
    filter () {
      return this.$store.state.projects.filter
    }
  }
}
</script>

<style scoped>
.section-title {
  margin-bottom: -18px;
}
</style>
