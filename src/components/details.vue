<template>
    <div id='post-details'>
        <div>
            <h3>{{ post.title }}</h3>
            <p></p>
            <p>{{ post.text }}</p>
            <div class='buttons'>
                <button @click='$router.go(-1)'>Back</button>
                <button @click='gotoEdit'>Edit</button>
                <button @click.prevent='removePost'>
                  Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IPost from '@/interface/data';
import getPosts from '@/composables/use-post';
import navPosts from '@/composables/use-navigation';
import router from '@/router';

export default defineComponent({
  name: 'Details',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const key = ref(props.id);
    const { posts, deletePost } = getPosts();
    const { goToEditPost } = navPosts();
    let index = 0;

    const post: IPost = {
      title: '',
      text: '',
      id: 0,
    };

    for (let i = 0; i < posts.value.length; i += 1) {
      if (posts.value[i].id === +key.value) {
        console.log(posts.value[i].title);
        console.log(posts.value[i].id);
        index = i;
        post.title = posts.value[i].title;
        post.text = posts.value[i].text;
        post.id = posts.value[i].id;
        console.log(post);
      }
    }
    function removePost() {
      if (deletePost(index)) {
        console.log('Post deleted');
        router.go(-1);
      }
    }

    function gotoEdit() {
      goToEditPost(post.id);
    }
    return {
      post, removePost, gotoEdit,
    };
  },
});
</script>

<style scoped>
div #post-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}
</style>
