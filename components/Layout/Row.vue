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
}
</script>

<style>
.outline-row {
  border: 2px solid seagreen;
  padding: 2px;
}
</style>
