<script setup lang="ts">

</script>

<template>
  <div class="relative bottom-8 md:bottom-4">
    <div class="font-bold">
      <p class="text-6xl opacity-30 absolute md:text-8xl">#02</p>
      <h2 class="text-xl font-medium h-14 md:h-24 flex items-center relative pl-5 z-10 md:text-4xl">Wylosowany serwer!</h2>
    </div>
  </div>
  <div class="rounded-2xl border border-white border-opacity-10 bg-white bg-opacity-5 backdrop-blur-[10%] p-6 hover:shadow-xl transition-all">
    <div class="flex flex-col md:flex-row items-center gap-3">
      <img src="https://picsum.photos/200" alt="server-icon" class="w-24 h-24">
      <div class="text-xs md:text-base w-full">
        <h1 class="text-base font-bold">Exoti.net</h1>
        <div class="flex flex-col text-xs md:text-sm">
          <h2>CraftMC.PL ➟ Strona WWW:</h2>
          <h2>www.craftmc.pl Nowa edycja SkyBlock </h2>
        </div>
        <div class="flex gap-2 opacity-90 mt-2 scale-90 md:scale-100 -translate-x-4 xl:-translate-x-0">
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
</template>
