<template>
  <div class="about-layout">
    <header class="about-header">
      <h1>About Our Todo App</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer class="about-footer"> Varaman Todo App. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
// You can add layout-specific logic here if needed
</script>

<style scoped>
.about-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.about-header {
  background: #409eff;
  color: #fff;
  padding: 2rem;
  text-align: center;
}
.about-footer {
  margin-top: auto;
  background: #f5f5f5;
  color: #888;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
main {
  flex: 1;
  padding: 2rem;
}
</style>