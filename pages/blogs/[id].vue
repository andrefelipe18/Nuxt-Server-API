<script setup lang="ts">
import type { SerializedBlog, PostsResponse } from '~/types/PostsResponse';

const id = useRoute().params.id;
const blog = ref<SerializedBlog>({
  id: 0,
  title: '',
  content: '',
  createdAt: '',
  updatedAt: '',
});

const fetchData = async () => {
  try {
    const data = await $fetch<PostsResponse>(`/api/blogs/${id}`);
    blog.value = data.body as SerializedBlog;
  } catch (error) {

  }
};

const editBlog = async (event: Event) => {
  event.preventDefault();
  try {
    await $fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: blog.value
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => fetchData());
</script>
<template>
  <div>
    <h1>Show</h1>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.content }}</p>
    <p>{{ blog.createdAt }}</p>

    <form @submit="editBlog">
      <input type="text" v-model="blog.title" />
      <textarea v-model="blog.content"></textarea>
      <button type="submit">Update</button>
    </form>
  </div>
</template>
<style scoped></style>