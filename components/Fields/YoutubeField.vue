<template>
  <b-embed
    type="iframe"
    :aspect="ratio"
    :src="`https://www.youtube.com/embed/${get_id(
      content.fields.url
    )}?rel=0?playsinline=1`"
    allowfullscreen
  ></b-embed>
</template>

<script>
export default {
  props: {
    content: Object,
    ratio: {
      type: String,
      default: '16by9',
    },
  },
  methods: {
    get_id: function (url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return match && match[2].length === 11 ? match[2] : null
    },
  },
}
</script>
