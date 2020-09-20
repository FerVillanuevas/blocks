<template>
  <b-container fluid>
    <component
      v-if="content"
      v-bind:is="content.fields.componentName"
      :content="content"
      :headline="content.fields.title"
    ></component>
  </b-container>
</template>

<script>
export default {
  props: {
    content: Object,
  },
  components: {
    musicDynamic: () => import('~/components/Dynamics/musicDynamic'),
    postDynamic: () => import('~/components/Dynamics/blogDynamic'),
  },
}
</script>

<style></style>
