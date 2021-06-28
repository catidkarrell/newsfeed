import { ref } from 'vue';
import Data from '@/data/Data';

const getPosts = () => {
  const posts = ref(Data);

  const totalIndex: number = posts.value.length;

  return { posts, totalIndex };
};

export default getPosts;
