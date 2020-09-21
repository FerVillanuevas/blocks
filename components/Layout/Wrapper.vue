<template>
  <b-container fluid class="outline-wrapper">
    <row v-for="row in items.rows" :key="row.sys.id" :items="row.fields"></row>
  </b-container>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  components: {
    row: () => import('~/components/Layout/Row'),
  },
}
</script>

<style>
.outline-wrapper {
  border: 2px solid tomato;
}
</style>
