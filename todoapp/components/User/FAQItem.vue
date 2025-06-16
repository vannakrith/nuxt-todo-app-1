<template>
    <div class="">
        <p class="font-medium	"> {{ index }}. {{ question }}</p>
        <p>{{ answer }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    index: number
    question: string;
    answer: string;
}>()

</script>

<style scoped>

</style>