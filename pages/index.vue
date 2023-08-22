<template>
  <div>
    <PageIndexTop />
    <b-container class="bv-example-row content my-3">
      <b-row>
        <b-col lg="9">
          <PageIndexAbout />
        </b-col>
        <b-col lg="3">
          <PageIndexContact />
        </b-col>
      </b-row>
      <b-col lg="9">
        <ProjectList />
      </b-col>
    </b-container>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  async fetch () {
    const projects = await this.$content('projects').fetch()
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
      add: 'projects/add'
    })
  }
}
</script>
