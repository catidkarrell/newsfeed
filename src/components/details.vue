<template>
    <div id='post'>
        <div>
            <form>
              <input id="postTitle" placeholder="Title" v-model="post.title" required/>
              <p></p>
              <textarea rows="10" placeholder="Content" v-model="post.text" required>
              </textarea>
            </form>
            <div class='buttons'>
                <button @click='$router.go(-1)'>Back</button>
                <button @click.prevent='saveEdit'>
                  <router-link id="newsfeed" to="/newsfeed">Save</router-link>
                </button>
                <button @click.prevent='deletePost' id='deleteButton'>
                  <router-link id="newsfeed" to="/newsfeed">Delete</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import postData from '@/data/postData';
import postInterface from '@/interface/dataInterface';

export default defineComponent({
  name: 'Details',
  props: ['id'],
  setup(props) {
    const key = ref(props.id);
    const posts = ref(postData);
    let index = 0;

    const post: postInterface = {
      title: '',
      text: '',
      id: '',
    };
    onMounted(() => {
      console.log('Mounted');
    });

    for (let i = 0; i < posts.value.length; i += 1) {
      if (posts.value[i].id === props.id) {
        console.log(posts.value[i].title);
        console.log(posts.value[i].id);
        post.title = posts.value[i].title;
        post.text = posts.value[i].text;
        post.id = posts.value[i].id;
        index = i;
        console.log(post);
      }
    }

    function saveEdit() {
      if (window.confirm('Save changes?')) {
        alert('Saved');
        posts.value.splice(index, 1, post);
        console.log(posts);
      }
    }

    function deletePost() {
      if (window.confirm('Are you sure you want to delete?')) {
        console.log('Post deleted');
        posts.value.splice(index, 1);
      }
    }
    return {
      key, post, posts, index, deletePost, saveEdit,
    };
  },
});
</script>

<style scoped>
div #post {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}
#deletBtn {
  background: rgb(129, 15, 38);
}
</style>
