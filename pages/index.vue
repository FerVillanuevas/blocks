<template>
  <div>
    <wrapper v-for="wrapper in wrappers" :key="wrapper.sys.id" :items="wrapper.fields" />
  </div>
</template>

<script>
var contentful = require('contentful')

import wrapper from '~/components/Layout/Wrapper'

var client = contentful.createClient({
  space: 'nakv44jd0g8a',
  accessToken: 'cLhCWdiPHse8Acc7RgOKKtl3ZDFsM0-F5HF2ddAXocU',
})
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
