<template>
  <b-col
    class="outline-col"
    :sm="column.sm"
    :md="column.md"
    :lg="column.lg"
    v-if="column"
  >
    <template v-for="block in column.blocks">
      <component
        v-bind:is="block.sys.contentType.sys.id"
        :key="block.sys.id"
        :content="block"
      ></component>
    </template>
  </b-col>
</template>

<script>
import blockSlider from '~/components/Blocks/blockSlider'

//Fields
import contentImage from '~/components/Fields/ContentImage'
import YoutubeField from '~/components/Fields/YoutubeField'

//Dynamics
import dynamicBlock from '~/components/Dynamics/dynamicBlock'

export default {
  components: {
    blockSlider,
    YoutubeField,
    dynamicBlock,
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

<style>
.outline-col {
  border: 2px solid skyblue;
  padding: 2px;
}
</style>
