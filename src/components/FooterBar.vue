<script setup>

import { getRefLink } from '../helpers/utils'

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

</script>

<template>

    <div class="bottom-0 flex items-center justify-center w-full h-10 p-1 mt-auto text-sm bg-white border-t xs:text-sm">
        <p>Built with 💖 by 
            <a :href="getRefLink('https://twitter.com/c_lennyx')" target="_blank">Lennox</a> | <button @click="scrollToTop" class="ml-0.5">🔝</button>
        </p>
    </div>
    
</template>