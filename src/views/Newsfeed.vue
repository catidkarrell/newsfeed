<template>
  <div>
    <CreatePost />
  </div>
  <div>
    <PostList :posts="posts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getPosts from '@/composables/getPosts';
import CreatePost from '@/components/create-post.vue';
import PostList from '@/components/post-list.vue';

export default defineComponent({
  name: 'newsfeed',
  components: {
    CreatePost,
    PostList,
  },

  setup() {
    const { posts } = getPosts();

    return { posts };
  },
});
</script>

<style>

</style>
