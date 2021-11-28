<template>
  <b-card class="post-container">
    <p class="text-caption mb-0">
      <span v-if="p.duration">
        <font-awesome-icon :icon="['fas', 'clock']" />
        <span v-if="p.duration > 1">{{ p.duration }} Monate</span>
        <span v-else-if="p.duration == 1">1 Monat</span>
        <span v-else-if="p.duration > 0.25">{{ p.duration*4 }} Wochen</span>
        <span v-else-if="p.duration == 0.25">1 Woche</span>
      </span>
      <span v-if="p.company">
        | <font-awesome-icon :icon="['fa', 'map-marker']" />
        {{ p.company }}
      </span>
      <span v-if="p.field">
        | <font-awesome-icon :icon="['fas', 'cog']" /> {{ p.field }}
      </span>
      <span v-if="p.link">
        | <a :href="p.link" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" />
          Live
        </a>
      </span>
      <span v-if="p.git">
        | <a :href="p.git" target="_blank">
          <font-awesome-icon :icon="['fas', 'code']" />
          Code
        </a>
      </span>
    </p>
    <nuxt-link class="post-container" :to="`/projects/${p.slug}`">
      <h3 class="mb-2 mt-0">
        {{ p.title }}
      </h3>
    </nuxt-link>
    <b-badge
      v-for="tech in p.technologies.split(/; /g)"
      :key="tech"
      class="mr-1 opacity-75 cursor-pointer"
      :class="{'bg-lila': filter.technologies.length == 0 ? true : filter.technologies.includes(tech)}"
      pill
    >
      {{ tech.replace(/;/g, '') }}
    </b-badge>
    <!-- <h4 class="mb-0 text-caption lila">
      {{ p.technologies }}
    </h4> -->
    <div v-if="p.description" class="mt-2">
      {{ p.description }}
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    p: {
      type: Object,
      default: () => { return {} }
    },
    filter: {
      type: Object,
      default: () => { return { technologies: [] } }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-left: none;
  border-top: none;
  border-right: none;
  border-radius: 0;
}
.card-body {
  padding-left: 0;
  padding-right: 0;
}
.svg-inline--fa {
  color: rgba(0,0,0,0.5)
}
.post-container {
  display: block;
  color: unset;

  // padding: 1.3em;
  // border: 1px solid #eee;
  // border-radius: 0.4em;

  // h3 {
  //   margin-top: 0;
  //   margin-bottom: 0.5em;
  // }
}
</style>
