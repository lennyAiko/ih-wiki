<script setup>

function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

</script>

<template>
    <div class="sticky bottom-0 items-center justify-center flex p-1 font-medium mx-auto my-0 text-base xs:text-sm bg-white">
        <p>Created with 💖 by <a href="https://twitter.com/c_lennyx" target="_blank">Lennox</a> | <button @click="scrollToTop">🔝</button></p>
    </div>
</template>