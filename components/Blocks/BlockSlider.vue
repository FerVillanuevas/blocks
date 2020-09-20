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
import contentImage from '~/components/Fields/ContentImage'

export default {
  props: {
    content: Object,
  },
  components: {
    carousel,
    contentImage,
  },
  data() {
    return {
      block: null,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.content.sys.id).then((res) => {
      this.block = res.data.fields
    })
  },
}
</script>

<style></style>
