<template>
  <div>
    <b-container class="bv-example-row content my-3">
      <h2>Download as</h2>
      <b-button @click="downloadDoc()">
        Docx
      </b-button>
    </b-container>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  async fetch () {
    if (this.projects.length === 0) {
      const projects = await this.$content('projects').sortBy('id', 'desc').fetch()
      this.$store.commit('projects/add', projects)
    }
  },
  head () {
    return {
      titleTemplate: '%s',
      title: 'Full Stack Entwickler - Julian Brüning'
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects.filteredList
    }
  },
  methods: {
    ...mapMutations({
      generate: 'cv/generate'
    }),
    downloadDoc () {
      this.generate(this.projects)
    }
  }
}
</script>
