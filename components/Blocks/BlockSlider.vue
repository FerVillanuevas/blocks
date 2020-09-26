<template>
  <div v-if="block" class="cmp-slider">
    <b-carousel id="carousel" indicators img-width="1024" img-height="480">
      <b-carousel-slide v-for="hero in block.heros" :key="hero.sys.id">
        <template slot="img">
          <hero-banner :content="hero" />
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
    heroBanner: () => import('~/components/Fields/heroBanner'),
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
