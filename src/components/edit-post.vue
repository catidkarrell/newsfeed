<template>
  <div id='post-edit'>
    <div>
      <form>
        <input id='postTitle' placeholder='Title' v-model='post.title' required
        />
        <p></p>
        <textarea rows='10' placeholder='Content' v-model='post.text' required>
        </textarea>
      </form>
      <div class='buttons'>
        <button @click='$router.go(-1)'>Back</button>
        <button @click.prevent='saveEdit'>
          Save
        </button>
        <button @click.prevent='removePost' id='deleteButton'>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import IPost from '@/interface/data';
import router from '@/router';
import getPosts from '@/composables/use-post';

export default defineComponent({
  name: 'EditPost',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const key = ref(props.id);
    const { posts, updateEdit, deletePost } = getPosts();
    let index = 0;

    const post: IPost = {
      title: '',
      text: '',
      id: 0,
    };
    onMounted(() => {
      console.log('Mounted');
    });

    for (let i = 0; i < posts.value.length; i += 1) {
      if (posts.value[i].id === +key.value) {
        console.log(posts.value[i].title);
        console.log(posts.value[i].id);
        index = i;
        post.title = posts.value[i].title;
        post.text = posts.value[i].text;
        post.id = posts.value[i].id;
        console.log(post);
        break;
      }
    }

    function saveEdit() {
      if (post.title.trim() !== '' && post.text.trim() !== '') {
        if (updateEdit(post, index)) {
          router.go(-1);
        } else {
          alert('No title and/or content');
        }
      }
    }

    function removePost() {
      if (deletePost(index)) {
        console.log('Post deleted');
        router.go(-1);
      }
    }
    return {
      key,
      post,
      posts,
      index,
      removePost,
      saveEdit,
    };
  },
});
</script>

<style scoped>
div #post-edit {
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
