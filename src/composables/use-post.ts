import postData from '@/data/postData';
import { ref } from 'vue';
import IPost from '@/interface/data';
import router from '@/router';
import { RouteName } from '@/enum/route-name';

function getPost() {
  const posts = ref(postData);

  function createPost(title: string, text: string) {
    console.log('Post created');

    posts.value.unshift({
      title: title,
      text: text,
      id: Math.round(Math.random() * 100),
    });
  }

  function deletePost(index: number): boolean {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('Post deleted');
      posts.value.splice(index, 1);
      return true;
    }
    return false;
  }

  function updateEdit(post: IPost, index: number): boolean {
    if (window.confirm('Save changes?')) {
      console.log('Saved');
      posts.value.splice(index, 1, post);
      return true;
    }
    return false;
  }

  function goToEditPost(key: number) {
    router.push({ name: RouteName.EditPost, params: { id: key } });
  }
  return {
    posts, createPost, deletePost, updateEdit, goToEditPost,
  };
}
export default getPost;
