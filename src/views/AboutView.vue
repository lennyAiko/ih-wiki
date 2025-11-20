<script setup>
import { ref, onMounted } from "vue";

import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import data from "../data/db.json";

const counter = ref(0);

onMounted(() => {
  counter.value = data.length;
});
</script>

<template>
  <NavBar />

  <div class="flex flex-col items-start m-[84px] p-6 xs:m-[8%]">
    <div class="">
      <router-link to="/">
        <img src="/ihwiki.png" alt="ihwiki icon" class="w-[80px] h-[80px] -ml-2" loading="lazy" quality="100"
          width="1800" height="1800" />
      </router-link>
    </div>

    <div class="max-w-5xl text-base">
      <h4 class="my-2 text-xl font-bold text-primary">ih-wiki</h4>

      <p class="mb-2">
        Hi, I am <strong class="text-primary">ih-wiki</strong>, an open-source
        collaborative project to share valuable resources for Indie Hackers.
        Users are free to contribute their knowledge, experience and insights in
        the realm of indie hacking. Got no experience?
        <strong class="text-primary">ih-wiki</strong> is comprehensive enough to
        help you navigate the indie hacking ecosystem. Work together with
        <strong class="text-primary">ih-wiki</strong> to build a collective
        knowledge base to empower and foster innovation for seasoned / future
        indie hackers.
      </p>

      <p class="mt-2">
        Click the + sign above or follow the instructions
        <a href="https://github.com/lennyAiko/ih-wiki#code-method" target="_blank" class="underline">here</a>
      </p>

      <p class="mt-2 font-light">{{ counter }} resource(s) available</p>
    </div>

    <div class="my-5"></div>
  

  <a href="https://www.producthunt.com/products/indie-hackers-wiki-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-indie&#0045;hackers&#0045;wiki&#0045;2"
    target="_blank"><img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1040611&theme=light&t=1763675742572"
      alt="Indie&#0032;Hackers&#0032;Wiki - An&#0032;open&#0045;source&#0032;knowledge&#0032;base&#0032;for&#0032;indie&#0032;hackers | Product Hunt"
      style="width: 250px; height: 54px;" width="250" height="54" /></a>

      </div>

  <FooterBar />
</template>
