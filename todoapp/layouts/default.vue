<template>
    <div>
        <h2 class="font-bold mt-2">Todo List App</h2>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">
                <NuxtLink to="/">Home</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2">
                <NuxtLink to="user-settings">Settings</NuxtLink>
            </el-menu-item>
            <el-menu-item index="3">
                <NuxtLink to="/about">About</NuxtLink>
            </el-menu-item>
        </el-menu>
        <slot/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref('1');

function handleSelect(index: string) {
    activeIndex.value = index;
}

console.log('From default.vue file');


</script>

<style scoped>

</style>