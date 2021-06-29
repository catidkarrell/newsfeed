<template>
  <div class='post-list'>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :posts='posts' />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SinglePost from './single-post.vue';

export default defineComponent({
  name: 'postList',
  props: ['posts'],
  component: { SinglePost },
  setup(props) {
    console.log(props.posts);
  },
});
</script>

<style>
.post-list > * {
  grid-column: 1/-1;
  background: rgb(214, 214, 214);
  padding: 30px;
  margin: 10px;
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
