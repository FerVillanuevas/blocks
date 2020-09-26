<template>
  <img v-if="media" :src="media.fields.file.url" :alt="media.fields.title" />
</template>

<script>
export default {
  props: {
    image: Object,
  },
  data() {
    return {
      media: null,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.image.sys.id).then((res) => {
      this.media = res.data.fields.media
    })
  },
}
</script>

<style></style>
