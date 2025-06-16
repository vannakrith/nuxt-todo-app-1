<template>
    <section>
      <h2>Who We Are</h2>
      <p>
        Varaman Todo App helps you organize your tasks efficiently and boost your productivity.
        Our mission is to provide a simple yet powerful tool for managing your daily goals.
      </p>
      <h3>Contact Us</h3>
      <ul>
        <li>Email: support@varaman-todo.com</li>
        <li>Phone: +855 12 345 678</li>
      </ul>
      <button class="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded mt-4" @click="router.back()">Back</button>
    </section>
  </template>

<script setup lang="ts">
definePageMeta({
    layout: 'about-layout'
})
const router = useRouter();

console.log('From about.vue');


</script>


<style scoped>
section {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 2rem;
}
h2, h3 {
  color: #409eff;
}

</style>