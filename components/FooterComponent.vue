<script setup lang="ts">

</script>

<template>
  <footer class="z-30 relative bg-shadow border-t-size-shadow border-t-shadow backdrop-blur-2xl shadow-shadow-top w-screen h-fit px-[20vw] py-3 flex flex-col select-none">
    <section class="w-full h-full pt-2 flex flex-row justify-between">
      <p class="w-fit text-white font-semibold md:text-xl">listamc.pl</p>
      <ul class="w-fit hidden md:flex justify-end items-center">
        <li class="space-x-3 hover:cursor-pointer font-bold uppercase text-sm md:text-base">
          <NuxtLink to="/">
            <UtilsSpanGradient class="w-full" text="Premium" weight="bold" tabindex="-1"/>
          </NuxtLink>
          <NuxtLink to="/">Tos</NuxtLink>
          <NuxtLink to="/">Wiki</NuxtLink>
          <NuxtLink class="inline-block w-10 bg-white rounded-lg text-lg whitespace-no-wrap text-center">
            <UtilsSpanGradient class="w-full text-sm" text="Api" casing="uppercase" weight="bold" tabindex="-1"/>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="w-full pt-2">
      <a href="https://notbytes.com" target="_blank" class="text-sm md:text-md text-white">
        Wykonanie graficzne <UtilsSpanGradient text="notbytes.com" casing="lowercase" weight="bold"/>
      </a>
    </section>
    <section class="w-full p-[0.1rem] my-3 rounded bg-craftlist-gradient"></section>
    <section class="w-full flex justify-between pb-2 font-light">
      <p class="text-sm text-white">
        <span class="font-bold">© {{new Date().getFullYear()}} listmc.pl</span> Wszelkie prawa zastrzeżone
      </p>
    </section>
  </footer>
</template>