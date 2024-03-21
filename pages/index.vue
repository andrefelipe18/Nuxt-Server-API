<script setup lang="ts">
import type { PostsResponse, SerializedBlog } from '@/types/PostsResponse';

useHead({
  title: 'Blog'
});

const blogs = ref<SerializedBlog[]>([]);

const fetchData = async () => {
  try {
    const response = await $fetch<PostsResponse>('/api/posts');
    blogs.value = Array.isArray(response.body) ? response.body : [response.body];
  } catch (error) {
    console.error(error);
  }
};

const deleteBlog = async (blog: SerializedBlog) => {
  try {
    await $fetch(`/api/blogs/${blog.id}`, {
      method: 'DELETE'
    });
    fetchData();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => fetchData());
</script>

<template>
  <div>
    <h1>Blog - <NuxtLink to="/blogs/create">Create</NuxtLink>
    </h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <h2>{{ blog.title }} - {{ blog.createdAt }} - <NuxtLink :to="`/blogs/${blog.id}`">Edit</NuxtLink>
        </h2>
        <p>{{ blog.content }}</p>
        <button @click="deleteBlog(blog)">Delete</button>
      </li>
    </ul>

    <h1>Essa imagem vem do /imagem.jpg pois está na public</h1>
    <img src="/imagem.jpg" alt="">
    <h1>Essa imagem vem do /assets/imagem.jpg pois está na assets</h1>
    <img src="~/assets/imagem.jpg" alt="">
  </div>
</template>
