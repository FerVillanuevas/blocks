<template>
  <div v-if="block" class="block-slider">
    <b-carousel id="carousel" indicators img-width="1024" img-height="480">
      <b-carousel-slide v-for="image in block.images" :key="image.sys.id">
        <template slot="img">
          <content-image :image="image" class="w-100" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
  },
  components: {
    contentImage: () => import('~/components/Fields/ContentImage'),
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
