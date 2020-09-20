<template>
  <img
    :src="image.fields.media.fields.file.url"
    :alt="image.fields.media.fields.title"
  />
</template>

<script>
export default {
  props: {
    image: Object,
  },
}
</script>

<style></style>
