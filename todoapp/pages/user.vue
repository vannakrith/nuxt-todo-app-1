<template>
    <button
      @click="isCollapse = !isCollapse"
      style="margin-bottom: 20px; font-size: 18px;"
      class="ml-6 cursor-pointer"
    >
    <el-icon v-if="isCollapse"><Expand /></el-icon>
    <el-icon v-else><Fold /></el-icon>    </button>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><Avatar /></el-icon>
        <template #title>User Profile</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><setting /></el-icon>
        <template #title>Settings</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Help/></el-icon>
        <template #title>Help</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><QuestionFilled/></el-icon>
        <template #title>FAQ</template>
      </el-menu-item>
      
    </el-menu>
    <slot/>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Menu as IconMenu,
    Avatar,
    Setting,
    Help,
    QuestionFilled,
    Expand,
    Fold
  } from '@element-plus/icons-vue'
  
  const isCollapse = ref(true)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>