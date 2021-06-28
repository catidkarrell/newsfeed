<template>
  <div class='post-list'>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p></p>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'postList',
  props: ['posts'],

  setup(props) {
    const snippet = computed(() => {
      return props.post.text.substring(0, 100) + '...';
    });

    return { snippet };
  },
});
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

.post-list > * {
  grid-column: 1/-1;
  background: rgb(198, 255, 201);
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
}
</style>
