<template>
  <b-row v-if="music">
    <b-col :md="4" v-for="video in music" :key="video.sys.id">
      <div class="card mb-4">
        <div class="embed-responsive embed-responsive-16by9">
          <img
            :src="video.fields.thumbnail.fields.file.url"
            class="card-img-top embed-responsive-item"
            :alt="video.fields.thumbnail.fields.file.title"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-truncate">{{ video.fields.title }}</h5>
          <p class="card-text">{{ video.fields.myDescription }}</p>
          <nuxt-link
            v-if="video.fields.slug"
            :to="{ name: 'watch-slug', params: { slug: video.fields.slug } }"
            v-html="`ver`"
            class="btn btn-primary"
          />
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      music: [],
    }
  },
  mounted() {
    this.$contentful.getEntries('music').then((res) => {
      this.music = res.data.items
    })
  },
}
</script>

<style></style>
