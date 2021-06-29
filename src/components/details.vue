<template>
    <div class='post'>
        <div>
            <h3>{{ post.title }}</h3>
            <p></p>
            <p>{{ post.text }}</p>
            <div class='buttons'>
                <button @click='$router.go(-1)'>Back</button>
                <button>Edit</button>
                <button @click.prevent='deletePost'>Delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import postData from '@/data/postData';
import postInterface from '@/interface/dataInterface';

export default defineComponent({
  name: 'Details',
  props: ['id'],
  setup(props) {
    const key = ref(props.id);
    const posts = ref(postData);
    const index = 0;

    const post: postInterface = {
      title: '',
      text: '',
      id: '',
    };

    function deletePost() {
      if (window.confirm('Are you sure you want to delete?')) {
        console.log('Post deleted');
        posts.value.splice(index, 1);
      }
    }
    return {
      key, post, posts, index, deletePost,
    };
  },
});
</script>
