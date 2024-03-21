<script setup lang="ts">
const title = ref('');
const content = ref('');

const createPost = async () => {
    await $fetch('/api/blogs', {
        method: 'POST',
        
        body: JSON.stringify({
            title: title.value,
            content: content.value
        })
    })
};
</script>
<template>
  <div>
   <input type="text" v-model="title" />
   <textarea v-model="content"></textarea>
   <button @click="createPost">Create</button>
  </div>
</template>
<style scoped>

</style>