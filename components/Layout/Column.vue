<template>
  <b-col
    class="outline-col"
    :sm="column.sm"
    :md="column.md"
    :lg="column.lg"
    v-if="column"
  >
    <template v-for="block in column.blocks">
      <template v-if="block.sys.contentType.sys.id != 'row'">
        <component
          v-bind:is="block.sys.contentType.sys.id"
          :key="block.sys.id"
          :content="block"
        ></component>
      </template>
      <template v-else>
        <row :key="block.sys.id" :items="block.fields" />
      </template>
    </template>
  </b-col>
</template>

<script>
export default {
  components: {
    row: () => import('~/components/Layout/Row'),
    blockSlider: () => import('~/components/Blocks/blockSlider'),
    heroBanner: () => import('~/components/Blocks/heroBanner'),
    YoutubeField: () => import('~/components/Fields/YoutubeField'),
    dynamicBlock: () => import('~/components/Dynamics/dynamicBlock'),
    contentImage: () => import('~/components/Fields/ContentImage'),
  },
  props: {
    content: Object,
  },
  data() {
    return {
      column: null,
    }
  },
  mounted() {
    this.$contentful.getEntry(this.content.sys.id).then((res) => {
      this.column = res.data.fields
    })
  },
}
</script>
