<template>
    <div class='post'>
        <div>
            <h3>{{ post.title }}</h3>
            <p></p>
            <!-- <h4>{{ post.id }}</h4>
            <p></p> -->
            <p>{{ post.text }}</p>
            <div class='buttons'>
                <button @click='$router.go(-1)'>Back</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import getPost from '@/composables/getPost';

export default defineComponent({
  props: ['id'],
  setup(props) {
    const { post } = getPost(props.id);
    onMounted(() => {
      console.log(post.title);
    });

    return { post };
  },
});
</script>
