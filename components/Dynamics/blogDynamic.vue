<template>
  <div class="post_dynamic row">
    <b-col :sm="12" v-if="headline != null">
      <h1 v-html="headline">Title</h1>
    </b-col>
    <template v-if="posts">
      <div class="col-12" v-for="post in posts" :key="post.sys.id">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                v-if="post.fields.thumbnail"
                :src="post.fields.thumbnail.fields.file.url"
                class="card-img"
                alt="post.fields.thumnail.file.fiels.url"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" v-html="post.fields.title">
                  Card title
                </h5>
                <p
                  class="card-text"
                  v-if="post.fields.extract"
                  v-html="post.fields.extract"
                >
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted" v-html="post.sys.updatedAt"
                    >Last updated 3 mins ago</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    content: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      posts: null,
    }
  },
  mounted() {
    var query = this.content ? this.content.fields.query : {}
    this.$contentful.getEntries('posts', query).then((res) => {
      this.posts = res.data.items
    })
  },
}
</script>

<style></style>
