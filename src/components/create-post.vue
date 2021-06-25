<template>
  <div id="postform">
    <div>
      <form>
        <input id="postTitle" placeholder="Title" v-model="title" required />
        <p></p>
        <textarea rows="3" placeholder="Content" v-model="text" required></textarea>
        <div class="buttons">
          <button @click="createPost">Post</button>
          <button @click="clearContents">Cancel</button>
        </div>
      </form>
    </div>
  </div>

  <button @click="toggleFeed">Toggle Feed</button>

  <div class="postfeed" v-show="toggle">

    <ul id="list">
      <li v-for="post in posts" :key="post">
        <PostList :postTitle="post.title" :postContent="post.text" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './post-list.vue';

const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ...';

export default defineComponent({
  name: 'newsfeedNewsFeed',
  components: {
    PostList,
  },
  data() {
    return {
      toggle: true,
      title: '',
      text: '',
      key: '',
      posts: [
        { title: 'Title 1', text: body, key: 'Title 1' },

      ],
    };
  },
  methods: {
    createPost() {
      if (this.title !== '' && this.text !== '') {
        const Title = this.title;
        const Text = this.text;
        const Key = this.key;

        this.posts.unshift({ title: Title, text: Text, key: Key });

        this.title = '';
        this.text = '';
      }
    },
    toggleFeed() {
      this.toggle = !this.toggle;
    },
    clearContents() {
      this.title = '';
      this.text = '';
    },
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
  box-shadow: 3px 3px 3px rgb(199, 199, 199);
}
#list > * {
  grid-column: 1/-1;
  background: rgb(228, 255, 230);

  padding: 30px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px rgb(199, 199, 199);
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
