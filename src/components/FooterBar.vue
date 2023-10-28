<script setup>

import { getRefLink } from '../helpers/utils'

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

</script>

<template>

    <div class="fixed inset-x-0
    bottom-0 items-center justify-center flex p-1 mt-auto w-full h-10 text-sm xs:text-sm bg-white border-t">
        <p>Built with 💖 by 
            <a :href="getRefLink('https://twitter.com/c_lennyx')" target="_blank">Lennox</a> | <button @click="scrollToTop">🔝</button>
        </p>
    </div>
    
</template>