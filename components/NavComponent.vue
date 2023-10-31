<script setup lang="ts">

</script>

<template>
<!--  <header class="z-50 relative bg-list-gradient w-screen px-[25vh] grid place-items-center py-1 text-white">-->
<!--    <NuxtLink to='/premium' class="text-sm font-semibold">👋 Pierwsze 10 dni PREMIUM za 50%!</NuxtLink>-->
<!--  </header>-->
  <nav class="z-40 w-screen flex select-none top-0 sticky items-center">
    <NuxtLink to="/" class="pl-[2%]">
      <img src="~/assets/logo/bialy-bok.svg" alt="Logo" class="h-48 w-full">
    </NuxtLink>
    <div class="hidden h-12 w-px bg-white opacity-30 sm:inline-block"></div>
    <div class="w-fit flex justify-start items-center text-white text-xl font-light">
      <div class="space-x-8 ml-10">
        <NuxtLink to="/losuj">Losuj serwer</NuxtLink>
        <NuxtLink to="/dodaj">Dodaj serwer</NuxtLink>
        <UtilsSpanGradient>

        </UtilsSpanGradient>
        <NuxtLink to="/premium">Premium</NuxtLink>
      </div>
    </div>
  </nav>
</template>