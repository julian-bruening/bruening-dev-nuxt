<template>
  <div>
    <b-container class="bv-example-row content my-3">
      <h2>Download as</h2>
      <b-button @click="downloadDoc()">Docx</b-button>
      <b-button @click="testGenerate()">PDF</b-button>
    </b-container>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  async fetch () {
    const projects = await this.$content('projects').sortBy('id', 'desc').fetch()
    this.$store.commit('projects/add', projects)
  },
  head () {
    return {
      titleTemplate: '%s',
      title: 'Full Stack Entwickler - Julian Brüning'
    }
  },
  methods: {
    ...mapMutations({
      generate: 'cv/generate',
      testGenerate: 'cv/testGenerate'
    }),
    downloadDoc () {
      this.generate({
        projects: [
          {
            isCurrent: true,
            summary: 'Full-stack developer working with Angular and Java. Working for the iShares platform',
            title: 'Associate Software Developer',
            startDate: {
              month: 11,
              year: 2017
            },
            company: {
              name: 'BlackRock'
            }
          }
        ]
      })
    }
  }
}
</script>
