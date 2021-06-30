<template>
  <div class='post-list'>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p></p>
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'postList',
  props: ['posts', 'post'],
  setup(props) {
    console.log(props.posts);
  },
});
</script>

<style>
.post-list > * {
  grid-column: 1/-1;
  background: rgb(214, 214, 214);
  padding: 25px;
  margin: 10px;
  border-radius: 10px;
}
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
</style>
