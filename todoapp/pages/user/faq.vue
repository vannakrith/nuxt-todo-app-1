<template>
    <div class="ml-4">
        <h2>FAQ</h2>
        <UserFAQItem 
            v-for="(faq,index) in faqs"
            :key="index"
            :index="faq.index"
            :question="faq.question"
            :answer="faq.answer"
        />
    </div>
</template>

<script setup lang="ts">
import faqs from '~/data/faqs';

</script>

<style scoped>

</style>