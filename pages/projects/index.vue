<template>
  <b-container class="bv-example-row content my-3">
    <!-- loop through each post -->
    <ProjectList />
  </b-container>
</template>

<script>
export default {
  async fetch () {
    if (this.$store.getters['projects/list'].length === 0) {
      const projects = await this.$content('projects').sortBy('id', 'desc').fetch()
      this.$store.commit('projects/add', projects)
    }
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

<style scoped>
.post-container + .post-container {
  margin-top: 0.5em;
}
</style>
