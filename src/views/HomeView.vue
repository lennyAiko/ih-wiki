<script setup>

import { ref, onMounted } from 'vue'
import navbar from '../components/navbar.vue'
import data from '../data/db.json'
import {getCategoryEmoji, upperFirstLetter} from '../helpers/utils.js'

const categories = ref()
const store = ref(data)

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
        class="flex flex-row flex-wrap gap-3 m-2 items-center justify-center">
            <span v-for="category in categories" 
            class="rounded-full border-2 border-dashed px-2.5 py-1.5
            hover:bg-slate-200 font-semibold grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                {{ getCategoryEmoji(category) }} {{ upperFirstLetter(category) }}
            </span>
        </div>

        <div class="grid grid-cols-4 lg:grid-cols-4 min-w-min sm:grid-cols-1 gap-2 m-3 overflow-hidden auto-cols-min auto-rows-min">

            <div v-for="item in store"
            class="border rounded-lg items-start bg-slate-50 m-1.5 p-1.5 justify-start block overflow-hidden">

                <h4
                class="font-semibold text-base my-2"
                >{{ item.name }}</h4>

                <p class="text-sm my-3">{{ item.description }}</p>

                <div class="flex flex-row flex-wrap items-center justify-between m-0.5">

                    <div
                    class="border rounded-lg m-0.5">
                        <span v-for="category in item.categories">{{ getCategoryEmoji(category) }}</span>
                    </div>

                    <span>{{ getCategoryEmoji(item.pricing) }}</span>
                    
                    <a :href="item.external_link" target="_blank">
                        <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"></path> </g></svg>
                    </a>

                </div>
        
            </div>
        </div>
      
    </div>

    <!-- FOOTER -->
</template>