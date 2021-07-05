<template>
  <div class='singlepost'>
    <h3 @click='goToPostDetails' id='detailsHeader'>{{ post.title }}</h3>
    <p></p>
    <p>{{ snippet }}</p>
  </div>
    <div class='button'>
      <button @click='goToPostEdit'>
        Edit
      </button>
    </div>
</template>

<script lang="ts">
import IPost from '@/interface/data';
import { computed, defineComponent, PropType } from 'vue';
import router from '@/router';
import { RouteName } from '@/enum/route-name';
import getPosts from '@/composables/use-post';

export default defineComponent({
  name: 'singlePost',
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const { goToEditPost, goToDetails } = getPosts();

    const snippet = computed(() => {
      return props.post.text.substring(0, 100) + '...';
    });

    function goToPostEdit() {
      goToEditPost(props.post.id);
    }

    function goToPostDetails() {
      goToDetails(props.post.id);
    }

    return { goToPostEdit, goToPostDetails, snippet };
  },
});
</script>

<style scoped>
#detailsHeader:hover {
  cursor: pointer;
  color:rgb(126, 165, 128);
}
</style>
