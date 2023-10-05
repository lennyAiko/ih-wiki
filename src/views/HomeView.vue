<script setup>

import { ref, onMounted } from 'vue'
import navbar from '../components/navbar.vue'
import data from '../data/db.json'

const categories = ref()

onMounted(() => {
    categories.value = data
        .map(element => element.categories)
        .flat(1)
        .map(element => element.toLowerCase())
        .sort((a, b) => a.localeCompare(b))
    categories.value = [...new Set(categories.value)]
})


</script>

<template>
    <!-- NAV -->
    <navbar />

    <!-- BODY -->

    <div>

        <div v-for="category in categories">
            <span>{{ category }}</span>
        </div>
      
    </div>

    <!-- FOOTER -->
</template>