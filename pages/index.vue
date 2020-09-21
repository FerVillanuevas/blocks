<template>
  <div>
    <wrapper
      v-for="wrapper in wrappers"
      :key="wrapper.sys.id"
      :items="wrapper.fields"
    />
  </div>
</template>

<script>
export default {
  components: {
    wrapper: () => import('~/components/Layout/Wrapper'),
  },
  data() {
    return {
      wrappers: null,
    }
  },
  async fetch() {
    let { data } = await this.$contentful.getEntries('wrapper')
    this.wrappers = data.items
  },
}
</script>
