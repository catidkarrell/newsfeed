<template>
  <div class='post-list'>
    <div v-for='post in posts' :key='post.id'>
      <SinglePost :post='post' />
    </div>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/data';
import { defineComponent, PropType } from 'vue';
import SinglePost from '@/components/single-post.vue';

export default defineComponent({
  name: 'postList',
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
  components: { SinglePost },
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
