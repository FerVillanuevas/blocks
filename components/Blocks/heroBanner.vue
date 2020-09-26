<template>
  <div class="cmp-hero-banner">
    <div class="cmp-hero-banner__content" v-if="hero">
      <div class="cmp-hero-banner__body">
        <h1 v-html="hero.headline">Title</h1>
        <p v-html="hero.body">Body</p>
        <cta :content="hero.cta" />
      </div>
      <div class="cmp-hero-banner__image">
        <content-image :image="hero.image" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    cta: () => import('~/components/Fields/cta'),
    contentImage: () => import('~/components/Fields/ContentImage'),
  },
  props: {
    content: Object,
  },
  data() {
    return {
      hero: null,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.content.sys.id).then((res) => {
      this.hero = res.data.fields
    })
  },
}
</script>
<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap-grid';

.cmp-hero-banner {
  min-height: 75vh;
  display: flex;
  align-items: center;
  h1 {
    color: #ff4140;
    text-transform: capitalize;
  }
  .btn {
    border-radius: 50px;
    padding: 0.5rem 3rem;
    text-transform: uppercase;
  }
  &__content {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  &__body {
    margin-top: 5%;
    width: 100%;
  }
  &__image {
    width: 100%;
  }
}
@include media-breakpoint-up(md) {
  .cmp-hero-banner {
    min-height: 100vh;
    h1 {
      font-size: 80px;
    }
    &__content {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
    }
    &__body {
      width: 40%;
      padding-left: 5%;
    }
    &__image {
      display: flex;
      justify-content: center;
      width: 60%;
      img {
        max-width: 80%;
        border-radius: 0 0 50% 50%;
      }
    }
  }
}
</style>
