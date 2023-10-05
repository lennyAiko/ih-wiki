<script setup>

import { ref, onMounted } from 'vue'
import navbar from '../components/navbar.vue'
import data from '../data/db.json'
import {getCategoryEmoji, upperFirstLetter} from '../helpers/utils.js'

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

        <div 
        class="flex flex-row flex-wrap gap-4 m-2 items-center justify-center">
            <span v-for="category in categories" 
            class="rounded-full border-2 border-dashed px-2.5 py-1.5">
                {{ getCategoryEmoji(category) }} {{ upperFirstLetter(category) }}
            </span>
        </div>
      
    </div>

    <!-- FOOTER -->
</template>