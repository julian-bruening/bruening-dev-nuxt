<template>
  <span v-if="duration > 1">{{ duration }} Monate</span>
  <span v-else-if="duration == 1">1 Monat</span>
  <span v-else-if="duration > 0.25">{{ duration*4 }} Wochen</span>
  <span v-else-if="duration == 0.25">1 Woche</span>
</template>
<script>
export default {
  props: {
    duration: {
      type: Number,
      required: true
    }
  }
}
</script>
