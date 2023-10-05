<script setup>

import navbar from '../components/navbar.vue'
import data from '../data/db.json'

var categories = data
    .map(element => element.categories)
    .flat(1)
    .map(element => element.toLowerCase())
    .sort((a, b) => a.localeCompare(b))
categories = [...new Set(categories)]

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