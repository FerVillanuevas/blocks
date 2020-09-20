<template>
  <div v-if="block" class="block-slider">
    <carousel draggable>
      <content-image
        v-for="image in block.images"
        :image="image"
        :key="image.sys.id"
      />
    </carousel>
  </div>
</template>

<script>
import carousel from 'ant-design-vue/lib/carousel'
var contentful = require('contentful')

var client = contentful.createClient({
  space: 'nakv44jd0g8a',
  accessToken: 'cLhCWdiPHse8Acc7RgOKKtl3ZDFsM0-F5HF2ddAXocU',
})

export default {
  props: {
    content: Object,
  },
  components: {
    carousel,
  },
  data() {
    return {
      block: null,
    }
  },
  mounted() {
    client.getEntry(this.content.sys.id).then((res) => {
      this.block = res.fields
    })
  },
}
</script>

<style></style>
