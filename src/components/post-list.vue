<template>
 <div class='post-list'>
    <div v-for="post in posts" :key="post.id" class="list">
      <SinglePost />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SinglePost from './single-post.vue';

export default defineComponent({
  name: 'postList',
  component: { SinglePost },
  props: ['posts'],
});
</script>

<style>
.post-list > * {
  grid-column: 1/-1;
  background: rgb(198, 255, 201);
  padding: 30px;
  border-radius: 10px;
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
