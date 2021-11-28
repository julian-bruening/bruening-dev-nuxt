<template>
  <LayoutPage
    :title="p.title"
    back-link="/projects"
  >
    <p class="text-caption mt-3 mb-2">
      <span v-if="p.duration">
        <font-awesome-icon :icon="['fas', 'clock']" />
        {{ p.duration }} Monate
      </span>
      <span v-if="p.company">
        | <font-awesome-icon :icon="['fa', 'map-marker']" />
        {{ p.company }}
      </span>
      <span v-if="p.field">
        | <font-awesome-icon :icon="['fas', 'cog']" /> {{ p.field }}
      </span>
    </p>
    <b v-if="p.description" class="mt-3 block">{{ p.description }}</b>
    <nuxt-content :document="p" class="mt-5 block" />
    <b-badge
      v-for="tech in p.technologies.split(/; /g)"
      :key="tech"
      class="mr-1 bg-lila opacity-75 cursor-pointer"
      pill
    >
      {{ tech.replace(/;/g, '') }}
    </b-badge>
  </LayoutPage>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const p = await $content(`projects/${params.slug}`).fetch()
    return { p }
  },
  head () {
    return {
      title: `${this.p.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.p.description}` }
      ]
    }
  }
}
</script>
