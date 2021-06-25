<template>
  <div class="newsfeed">
    <h1>This is an about page</h1>
    <CreatePost />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreatePost from '../components/create-post.vue'

export default defineComponent({
  name: 'newsfeed',
  components: { CreatePost },
})
</script>
