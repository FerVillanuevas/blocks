<template>
  <div class="music__page" v-if="music">
    <youtube-field ratio="21by9" :content="music" />
    <b-container fluid>
      <h1>{{ music.fields.title }}</h1>
      <p>{{ music.fields.myDescription }}</p>
    </b-container>
    <b-container>
      <music-dynamic />
    </b-container>
  </div>
</template>

<script>
import musicDynamic from '~/components/Dynamics/musicDynamic'
import youtubeField from '~/components/Fields/YoutubeField'

export default {
  components: {
    musicDynamic,
    youtubeField,
  },
  data() {
    return {
      music: null,
    }
  },
  mounted() {
    this.$contentful
      .getEntries('music', {
        'fields.slug[in]': this.$route.params.slug,
      })
      .then((res) => (this.music = res.data.items[0]))
      .catch((e) => console.error(e))
  },
}
</script>

<style></style>
