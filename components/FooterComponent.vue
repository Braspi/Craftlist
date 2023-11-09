<script setup lang="ts">

</script>

<template>
  <footer class="z-40 relative bg-shadow border-t-size-shadow border-t-shadow backdrop-blur-2xl shadow-shadow-top w-screen h-fit px-[25vw] py-3 flex flex-col select-none content-center">
    <section class="w-full h-full pt-2 flex flex-row justify-between">
      <p class="w-fit text-lg text-white font-semibold tracking-wide">listamc.pl</p>
      <ul class="w-fit flex justify-end items-center">
        <li class="space-x-5 hover:cursor-pointer font-bold uppercase">
          <NuxtLink to="/">
            <UtilsSpanGradient class="w-full" text="Premium" weight="bold" tabindex="-1"/>
          </NuxtLink>
          <NuxtLink to="/">Wiki</NuxtLink>
          <NuxtLink to="/">Losuj</NuxtLink>
          <NuxtLink to="/">Tos</NuxtLink>
          <NuxtLink class="w-fit h-fit">
            <section class="z-20 relative bg-white rounded-lg px-3 py-1 flex items-center gap-1 text-lg">
              <UtilsSpanGradient class="w-full text-sm text-center" text="Api" casing="uppercase" weight="bold" tabindex="-1"/>
            </section>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="w-full pt-2">
      <a href="https://nobytes.com" target="_blank" class="text-sm text-white">
        Wykonanie graficzne <UtilsSpanGradient text="nobytes.com" casing="lowercase" weight="bold"/>
      </a>
    </section>
    <section class="w-full p-[0.1rem] my-3 rounded bg-exotia-gradient"></section>
    <section class="w-full flex justify-between pb-2 font-light">
      <p class="text-sm text-white">
        <span class="font-bold">© {{new Date().getFullYear()}} listmc.pl</span> Wszelkie prawa zastrzeżone
      </p>
      <p class="text-sm text-white"></p>
    </section>
  </footer>
</template>

<style scoped>

</style>