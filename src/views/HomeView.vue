<script setup>
import { ref, onMounted, watch } from "vue";
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import data from "../data/db.json";
import {
  getCategoryEmoji,
  upperFirstLetter,
  getRefLink,
  sliceString,
} from "../helpers/utils.js";
import HoverImage from "../assets/hover-on-card.png";

const categories = ref();
const store = ref(data);
const filteredStore = ref();
const search = ref("");
const activeCategory = ref("");

const quickViewData = ref("");

function handleQuickViewData(item) {
  quickViewData.value = item;
}

function searchChange(event) {
  search.value = event;
}

function filterStore(category) {
  category = category.toLowerCase();

  if (category === "all") {
    return (filteredStore.value = store.value);
  }

  if (activeCategory.value === category) {
    activeCategory.value = "";
    return (filteredStore.value = store.value);
  }

  filteredStore.value = store.value.filter((item) => {
    let tempCategories = item.categories.map((element) =>
      element.toLowerCase()
    );

    if (tempCategories.includes(category)) {
      activeCategory.value = category;
      return item;
    }
  });
}

onMounted(() => {
  categories.value = data
    .map((element) => element.categories)
    .flat(1)
    .map((element) => element.toLowerCase())
    .sort((a, b) => a.localeCompare(b));
  categories.value = [...new Set(categories.value)];
  filterStore("all");
});

watch(search, () => {
  filteredStore.value = store.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// implement counter

if (sessionStorage.getItem("visit") === null) {
  // new visit and pageview
  analyticsData("vp");
} else {
  // pageview
  analyticsData("p");
}

sessionStorage.setItem("visit", "ih");

async function analyticsData(valueToSend) {
  await fetch(
    `${import.meta.env.VITE_API_URL}/update?toUpdate=${valueToSend}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
      },
    }
  );
}
</script>

<template>
  <div class="bg-slate-50">
    <!-- NAV -->
    <NavBar @searchKey="searchChange" />

    <!-- BODY -->

    <div class="h-full m-2 bg-slate-50">
      <div
        class="flex flex-row flex-wrap items-center justify-center gap-3 p-3 m-2 xs:justify-start xs:text-sm"
      >
        <button
          v-for="(category, index) in categories"
          @click="filterStore(category)"
          :key="index"
          :class="
            category === activeCategory
              ? 'grayscale-0 rounded-full border-2 border-solid px-2.5 py-1.5 -m-[4px] font-semibold bg-white'
              : 'rounded-full border-2 border-dashed px-2.5 py-1.5 -m-[4px] hover:border-solid font-semibold hover:grayscale-0 bg-white grayscale'
          "
        >
          {{ getCategoryEmoji(category) }} {{ upperFirstLetter(category) }}
        </button>
      </div>

      <div class="flex flex-row">
        <div
          class="grid grid-cols-3 gap-3 overflow-hidden md:w-3/4 md:grid-cols-3 lg:grid-cols-4 min-w-min xs:grid-cols-1 auto-cols-min auto-rows-min"
        >
          <div
            v-for="(item, index) in filteredStore"
            class="border rounded-lg items-start bg-white px-5 py-1.5 justify-start block overflow-hidden h-auto hover:sm:shadow-lg hover:shadow-md"
            @mouseover="handleQuickViewData(item)"
            @mouseleave="
              () => {
                quickViewData = '';
              }
            "
            :key="index"
          >
            <h4 class="my-2 text-base font-semibold text-primary">
              {{ item.name }}
            </h4>
            <p class="mb-5 text-sm">{{ sliceString(item.description) }}</p>
            <div
              class="flex flex-row flex-wrap items-center justify-between m-0.5"
            >
              <div class="flex gap-2 p-1 border rounded-lg">
                <span
                  v-for="(category, index) in item.categories"
                  :key="index"
                  >{{ getCategoryEmoji(category) }}</span
                >
              </div>

              <div class="border rounded-lg">
                <span>{{ getCategoryEmoji(item.pricing) }}</span>
              </div>
              <a :href="getRefLink(item.external_link)" target="_blank">
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="fixed hidden right-5 md:w-1/5 h-fit md:flex md:flex-col">
          <h3 class="mb-5 text-lg font-light">Quick View:</h3>

          <div class="p-2 border-4 border-white rounded-lg md:shadow-xl">
            <div
              class="flex flex-col items-center gap-5 p-4"
              v-if="quickViewData.length < 1"
            >
              <p class="text-lg font-light">
                Hover on a card to see full details
              </p>
              <img
                :src="HoverImage"
                alt="hover image"
                class="w-[200px] h-[200px]"
              />
            </div>

            <div class="flex flex-col gap-2.5 p-2" v-else>
              <h3 class="text-lg font-normal">
                {{ quickViewData.name }}
              </h3>
              <p class="text-base font-light tracking-tight">
                {{ quickViewData.description }}
              </p>
              <p class="flex gap-2 font-light">
                Tier:
                <span class="flex gap-2">
                  {{ quickViewData.pricing }}
                  {{ getCategoryEmoji(quickViewData.pricing) }}
                </span>
              </p>

              <p class="flex gap-2 font-light">
                Categories:
                <span
                  class="flex gap-2"
                  v-for="(category, index) in quickViewData.categories"
                  :key="index"
                >
                  {{ category }} {{ getCategoryEmoji(category) }}
                </span>
              </p>
              <p class="text-sm font-light" v-if="quickViewData.external_link">
                External link available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <FooterBar />
  </div>
</template>
