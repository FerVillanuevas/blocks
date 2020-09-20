<template>
  <div class="music__page" v-if="music">
    <youtube-field ratio="21by9" :content="music" />
    <b-container fluid>
      <h1>{{ music.fields.title }}</h1>
      <p>{{ music.fields.myDescription }}</p>
    </b-container>
    <b-container fluid>
      <div class="row">
        <div class="col-12 col-md-9">
          <music-dynamic />
        </div>
        <div class="col-12 col-md-3">
          <post-dynamic headline="Posts" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    musicDynamic: () => import('~/components/Dynamics/musicDynamic'),
    youtubeField: () => import('~/components/Fields/YoutubeField'),
    postDynamic: () => import('~/components/Dynamics/blogDynamic'),
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
