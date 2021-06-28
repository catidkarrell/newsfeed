import { ref } from 'vue';
import postData from '@/data/Data';

const getPost = (id: number) => {
  const posts = ref(postData);
  const post = posts.value[id];

  return { post };
};

export default getPost;
