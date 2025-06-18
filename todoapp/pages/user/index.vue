<template>
  <h2 class="mx-6 my-4">User Profiles</h2>
    <button
      @click="toggleCollapse"
      style="margin-bottom: 20px; font-size: 18px;"
      class="ml-6 cursor-pointer"
      >
      <el-icon v-if="isCollapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>    
    </button>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      router
      >
      <el-menu-item index="1" @click="router.push('/user/user-profile')">
          <el-icon><Avatar /></el-icon>
      <template #title>User Profile</template>
      </el-menu-item>
      <el-menu-item index="2" :route="{path: '/user/user-setting'}">
          <el-icon><setting /></el-icon>
        <template #title>Settings</template>
      </el-menu-item>
      <el-menu-item index="3" :route="{path: '/user/help' }">
          <el-icon><Help/></el-icon>
        <template #title>Help</template>
      </el-menu-item>
      <el-menu-item index="4" :route="{path: '/user/faq'}">
          <el-icon><QuestionFilled/></el-icon>
        <template #title>FAQ</template>
      </el-menu-item>
      
    </el-menu>
    <slot/>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const {saveToLocalStorage} = useUtils();
  import {
    Avatar,
    Setting,
    Help,
    QuestionFilled,
    Expand,
    Fold
  } from '@element-plus/icons-vue'
  const router = useRouter();
  const isCollapse = ref(true)
  const LOCAL_STORAGE_KEY = 'userMenuCollapse'


  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  onMounted(() => {
    if(import.meta.client && typeof window !== 'undefined') { //import.meta.client, it's special flag provded by nuxt3, determine if code run on client-side or not, if true => when running on browser
      const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY)
      if(saved !== null) {
        isCollapse.value = JSON.parse(saved)
      }
    }
  })

  watch(isCollapse, (value) => {
    saveToLocalStorage(LOCAL_STORAGE_KEY, value)
  })


  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>