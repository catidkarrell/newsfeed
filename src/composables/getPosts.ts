import { ref } from 'vue';
import Data from '@/data/Data';

const getPosts = () => {
  const posts = ref(Data);

  const totalProps: number = posts.value.length;

  return { posts, totalProps };
};

export default getPosts;
