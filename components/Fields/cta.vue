<template>
  <b-button v-if="cta" :variant="cta.type" :href="cta.url" v-html="cta.title"
    >Button</b-button
  >
</template>

<script>
export default {
  props: {
    content: Object,
  },
  data() {
    return {
      cta: null,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.content.sys.id).then((res) => {
      this.cta = res.data.fields
    })
  },
}
</script>

<style>
</style>
