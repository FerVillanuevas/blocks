<template>
  <b-row class="outline-row">
    <column
      v-for="column in items.columns"
      :key="column.sys.id"
      :content="column"
    ></column>
  </b-row>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  components: {
    column: () => import('~/components/Layout/Column'),
  },
}
</script>

<style>
.outline-row {
  border: 2px solid seagreen;
}
</style>
