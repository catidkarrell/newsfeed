<template>
  <h3>{{ postTitle }}</h3>
  <p></p>
  <p>{{ postContent }}</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['postTitle', 'postContent'],
  methods: {},
});
</script>

<style>
li {
  list-style: none;
  align-items: center;
}
</style>
