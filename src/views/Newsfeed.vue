<template>
  <div class="newsfeed">
    <CreatePost />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreatePost from '../components/create-post.vue';

export default defineComponent({
  name: 'newsfeed',
  components: { CreatePost },
});
</script>
