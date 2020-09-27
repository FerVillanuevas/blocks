<template>
  <b-container fluid class="outline-wrapper">
    <row
      v-for="row in items.rows"
      :key="row.sys.id"
      :items="row.fields"
      :headline="{
        headline: row.fields.headline,
        body: row.fields.body,
      }"
      :container="row.fields.container"
    ></row>
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
