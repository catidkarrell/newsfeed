<template>
  <div class="newsfeed">
    <label>Title:</label>
    <input type="text" v-model="tempSkill">
    <button @click='addSkill'>Post</button>
    <div v-for="skill in skills" :key="skill">
      {{skill}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
    tempSkill: '',
    skills: [],

   }
  },
  methods: {
    addSkill() {  
      if (!this.skills.includes(this.tempSkill)) {
         this.skills.push(this.tempSkill),
      }
      this.tempSkill = ''
    },
  },
});
</script>
