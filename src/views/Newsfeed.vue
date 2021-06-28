<template>
  <div class='createPost'>
    <CreatePost />
  </div>
  <div class='postFeed'>
    <PostFeed :posts='posts'/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreatePost from '../components/create-post.vue';
import getPosts from '../composables/getPosts';
import PostFeed from '../components/post-list.vue';

export default defineComponent({
  name: 'newsfeed',
  components: { CreatePost, PostFeed },

  setup() {
    const { posts } = getPosts();

    return { posts };
  },
});
</script>

<style>

</style>
