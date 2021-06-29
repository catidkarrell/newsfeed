import { ref } from 'vue';
import Data from '@/data/postData';

const getPost = (id: number) => {
  const posts = ref(Data);
  const post = posts.value[id];

  return { post };
};

export default getPost;
