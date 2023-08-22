<template>
  <div class="post-container">
    <p>
      <span v-if="p.duration" class="mr-4">
        <font-awesome-icon :icon="['fas', 'clock']" />
        <ElementDurationString :duration="p.duration" />
      </span>
      <span v-if="p.company" class="mr-4">
        <font-awesome-icon :icon="['fa', 'map-marker']" />
        {{ p.company }}
      </span>
      <span v-if="p.field" class="mr-4">
        <font-awesome-icon :icon="['fas', 'cog']" /> {{ p.field }}
      </span>
      <span v-if="p.link" class="mr-4">
        <a :href="p.link" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" />
          Live
        </a>
      </span>
      <span v-if="p.git">
        <a :href="p.git" target="_blank">
          <font-awesome-icon :icon="['fas', 'code']" />
          Code
        </a>
      </span>
    </p>
    <nuxt-link class="post-container mt-3 mb-2" :to="`/projects/${p.slug}`">
      <div class="text-caption mb-0 mt-0">
        {{ p.subtitle }}
      </div>
      <h3 class="mb-2 mt-0">
        {{ p.title }}
      </h3>
    </nuxt-link>
    <!-- <h4 class="mb-0 text-caption lila">
      {{ p.technologies }}
    </h4> -->
    <div v-if="p.description" class="mt-3 mb-4">
      {{ p.description }}
    </div>
    <b-badge
      v-for="tech in p.technologies.split(/; /g)"
      :key="tech"
      class="mr-1 opacity-75 cursor-pointer"
      :variant="filter.technologies.includes(tech) ? 'primary' : 'secondary'"
      pill
    >
      {{ tech.replace(/;/g, '') }}
    </b-badge>
  </div>
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

<style scoped>
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
}
.badge-secondary {
  background-color: #e9ecef;
  color: #212529;
}
</style>
