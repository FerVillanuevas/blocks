<template>
  <div :class="container">
    <b-row class="outline-row">
      <headline :content="headline" class="col-12 text-uppercase text-center" />
      <column
        v-for="column in items.columns"
        :key="column.sys.id"
        :content="column"
      ></column>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
    headline: Object,
    container: {
      type: String,
      default: 'container-fluid',
    },
  },
  components: {
    column: () => import('~/components/Layout/Column'),
    headline: () => import('~/components/Fields/headline'),
  },
}
</script>
