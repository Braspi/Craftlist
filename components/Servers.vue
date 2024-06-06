<template>
    <div class="relative bottom-8 md:bottom-4">
      <div class="font-bold">
        <p class="text-6xl opacity-30 absolute md:text-8xl">#01</p>
        <h2 class="text-xl font-medium h-14 md:h-24 flex items-center relative pl-5 z-10 md:text-4xl">Wybierz swój ulubiony serwer!</h2>
      </div>
    </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-0 lg:mb-8 w-full">
    <div v-for="i in 6" :key="i" class="rounded-2xl border border-white border-opacity-10 bg-white bg-opacity-5 backdrop-blur-[10%] p-3">
      <div class="flex flex-col md:flex-row items-center gap-3">
        <img src="https://picsum.photos/200" alt="server-icon" class="w-14 h-14">
        <div class="text-xs md:text-base w-full">
          <h1 class="text-base font-bold">Exoti.net</h1>
          <div class="flex flex-col text-xs md:text-sm">
            <h2>CraftMC.PL ➟ Strona WWW:</h2>
            <h2>www.craftmc.pl Nowa edycja SkyBlock </h2>
          </div>
          <div class="flex gap-2 opacity-90 mt-2 scale-90 md:scale-100 -translate-x-4">
            <UButton
                class="transition-all"
                icon="i-lucide-heart"
                size="xs"
                color="red"
                variant="outline"
                label="212"
                :trailing="false"
            />
            <UButton
                class="transition-all"
                icon="i-lucide-copy"
                size="xs"
                color="sky"
                variant="outline"
                label="exotia.net"
                :trailing="false"
            />
            <UButton
                class="transition-all"
                icon="i-lucide-book-open-check"
                size="xs"
                color="white"
                variant="outline"
                label="1.20 - 1.20.5"
                :trailing="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-6">
    <UPagination
        v-model="page"
        :page-count="5"
        :total="items.length"
    />
  </div>
</template>

<script setup lang="ts">
const page = ref(1)
const items = ref(Array(55))
</script>