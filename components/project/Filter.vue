<template>
  <div>
    Filtern:
    <b-badge
      v-for="tech in technologies"
      :key="tech"
      class="mr-1 opacity-75 cursor-pointer"
      :variant="filter.technologies.includes(tech) ? 'primary' : 'secondary'"
      pill
      @click="toggleTechFilter(tech)"
    >
      {{ tech.replace(/;/g, '') }}
    </b-badge>
    <b-link v-if="show > 0" class="inline-block" @click="show -= 1">
      mehr...
    </b-link>
    <b-link v-else-if="show < 2" class="inline-block" @click="show = 2">
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
      show: 2
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
      return keys.filter((k) => {
        return technologies[k] > this.show
      })
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

<style scoped>
a {
  font-size: 14px;
}
.badge-secondary {
  background-color: #e9ecef;
  color: #212529;
}
</style>
