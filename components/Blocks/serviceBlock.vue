<template>
  <div class="cmp-service h-100 mb-5" v-if="service">
    <content-image class="img-fluid w-25" :image="service.icon" />
    <h4>{{ service.title }}</h4>
    <p class="text-muted">{{ service.body }}</p>
    <div class="w-100 d-block" v-on:click="animate">
      <b-progress
        class="w-100"
        :value="level"
        :max="100"
        show-progress
        animated
      ></b-progress>
    </div>
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
      service: null,
      level: 0,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.content.sys.id).then((res) => {
      this.service = res.data.fields
    })
  },
  methods: {
    animate() {
      this.level = this.service.level
    },
  },
}
</script>

<style lang="scss" scoped>
.cmp-service {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
