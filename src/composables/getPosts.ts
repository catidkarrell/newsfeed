import postData from '@/data/postData';
import { ref } from 'vue';

function getPosts() {
  const posts = ref(postData);
  return { posts };
}

export default getPosts;
