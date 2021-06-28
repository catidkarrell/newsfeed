<template>
  <div id="postform">
    <div>
      <form>
        <input id="postTitle" placeholder="Title" v-model="title" required />
        <p></p>
        <textarea rows="3" placeholder="Content" v-model="text" required></textarea>
        <div class="buttons">
          <button @click.prevent="createPost">Post</button>
          <button @click.prevent="clearContents">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import getPosts from '@/composables/getPosts';

export default defineComponent({
  name: 'createPost',

  setup() {
    const { posts, totalProps } = getPosts();
    const title = ref('');
    const text = ref('');
    const post = {
      title: title.value,
      text: text.value,
      id: totalProps + 1,
    };

    function createPost() {
      if (title.value !== '' && text.value !== '') {
        console.log('Posted!');
        console.log(totalProps);

        posts.value.unshift(post);
      } else {
        alert('Post is empty.');
      }
    }
    function clearContents() {
      title.value = '';
      text.value = '';
    }
    return {
      title, text, posts, createPost, clearContents,
    };
  },
});
</script>

<style>
li {
  list-style-type: none;
}
div #postform {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}
#list {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}
#postTitle {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 10px;
  text-align: left;
  border-radius: 10px;
  color: gray;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(219, 219, 219);
  font-size: 1.2em;
}
textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
  color: gray;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(219, 219, 219);
  font-size: 1.2em;
}
div #postform > * {
  grid-column: 1/-1;
  background: rgb(241, 241, 241);
  padding: 30px 30px 10px 30px;
  border-radius: 10px;
  margin: 10px;
}
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
}
button:hover {
  background-color: rgb(34, 58, 37);
}
button:active {
  transform: scale(0.95);
}
</style>
