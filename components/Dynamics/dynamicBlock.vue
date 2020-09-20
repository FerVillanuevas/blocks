<template>
  <b-container fluid>
    <component v-bind:is="content.fields.componentName"></component>
  </b-container>
</template>

<script>
import musicDynamic from '~/components/Dynamics/musicDynamic'

export default {
  props: {
    content: Object,
  },
  components: {
    musicDynamic,
  },
}
</script>

<style></style>
