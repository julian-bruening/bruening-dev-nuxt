<template>
  <div>
    Filtern:
    <b-badge
      v-for="tech in technologies"
      :key="tech"
      class="mr-1 opacity-75 cursor-pointer"
      :class="{'bg-lila': filter.technologies.includes(tech)}"
      pill
      @click="toggleTechFilter(tech)"
    >
      {{ tech.replace(/;/g, '') }}
    </b-badge>
    <b-link v-if="!showAll" class="inline-block" @click="showAll = true">
      mehr...
    </b-link>
    <b-link v-else class="inline-block" @click="showAll = false">
      weniger...
    </b-link>
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
  // props: {
  //   projects: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data () {
    return {
      showAll: false
    }
  },
  computed: {
    technologies () {
      const technologies = {}
      for (const project of this.$store.state.projects.list) {
        for (const technology of project.technologies.split(/; /g)) {
          const t = technology.replace(/;/g, '')
          if (technologies[t]) {
            technologies[t] += 1
          } else {
            technologies[t] = 1
          }
        }
      }
      const keys = Object.keys(technologies)
      keys.sort((a, b) => {
        if (technologies[a] > technologies[b]) {
          return -1
        } else if (technologies[a] < technologies[b]) {
          return 1
        } else {
          return 0
        }
      })
      if (this.showAll) {
        return keys
      } else {
        return keys.splice(0, 10)
      }
    },
    filter () {
      return this.$store.state.projects.filter
    }
  },
  methods: {
    toggleTechFilter (tech) {
      const filter = JSON.parse(JSON.stringify(this.$store.state.projects.filter))
      const index = filter.technologies.findIndex(t => t === tech)
      if (index > -1) {
        filter.technologies.splice(index, 1)
      } else {
        filter.technologies.push(tech)
      }
      this.$store.commit('projects/filter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-size: 14px;
}
</style>
