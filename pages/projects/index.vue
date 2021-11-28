<template>
  <b-container class="bv-example-row content my-3">
    <!-- loop through each post -->
    <ProjectList :projects="projects" />
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      projects: []
    }
  },

  async fetch () {
    this.projects = await this.$content('projects').sortBy('id', 'desc').fetch()
  },

  head () {
    return {
      title: 'Projekte',
      meta: [
        { hid: 'description', name: 'description', content: 'Meine Projekte' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.post-container + .post-container {
  margin-top: 0.5em;
}
</style>
