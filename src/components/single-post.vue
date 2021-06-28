<template>
  <div class='posts'>
      <h3>{{ post.title }}</h3>
    <p></p>
    <p>{{ post.text }}</p>
    <div>
      <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <button>View</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'singlePost',
  props: ['post'],
});
</script>
