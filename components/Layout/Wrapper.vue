<template>
  <b-container fluid class="outline-wrapper">
    <row v-for="row in items.rows" :key="row.sys.id" :items="row.fields"></row>
  </b-container>
</template>

<script>
import row from '~/components/Layout/Row'
export default {
  props: {
    items: Object,
  },
  components: {
    row,
  },
}
</script>

<style>
.outline-wrapper {
  border: 2px solid tomato;
}
</style>
