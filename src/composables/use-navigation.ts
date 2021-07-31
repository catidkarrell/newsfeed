import { RouteName } from '@/enum/route-name';
import router from '@/router';

export default function navPosts() {
  function goToDetails(key: number) {
    router.push({ name: RouteName.Details, params: { id: key } });
  }

  function goToEditPost(key: number) {
    router.push({ name: RouteName.EditPost, params: { id: key } });
  }
  function goBackToNewsfeed() {
    router.push({ name: RouteName.Newsfeed });
  }
  return { goToDetails, goToEditPost, goBackToNewsfeed };
}
