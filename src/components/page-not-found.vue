<template>
  <div>
    <h1>Error 404</h1>
    <h2>Page not found</h2>
    <button @click="goBack">Go back to Newsfeed</button>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/data';
import { defineComponent, PropType } from 'vue';
import navPosts from '@/composables/use-navigation';

export default defineComponent({
  name: 'PageNotFound',
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },

  setup() {
    const { goBackToNewsfeed } = navPosts();
    function goBack() {
      goBackToNewsfeed();
    }

    return { goBack };
  },
});
</script>

<style>
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
button {
  padding: 10px;
  margin: 5px;
  background: rgb(0, 112, 15);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
button:hover {
  background-color: rgb(34, 58, 37);
}
button:active {
  transform: scale(0.95);
}
</style>
