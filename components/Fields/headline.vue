<template>
  <div class="cmp-headline">
    <h1 v-if="content.headline">{{ content.headline }}</h1>
    <p class="text-muted" v-if="content.body">{{ content.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
  },
}
</script>

<style></style>
