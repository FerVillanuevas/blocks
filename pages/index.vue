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
import wrapper from '~/components/Layout/Wrapper'

export default {
  components: {
    wrapper,
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
