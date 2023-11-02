<script setup lang="ts">

</script>

<template>
  <header class="z-50 relative bg-craftlist-gradient w-screen px-[25vh] grid place-items-center py-1 text-white">
    <NuxtLink to='/premium' class="text-sm font-medium">👋 Pierwsze 10 dni <span class="uppercase font-bold">premium</span> za 50%!👋</NuxtLink>
  </header>
  <nav class="z-40 w-screen flex select-none top-0 sticky items-center text-xl text-white">
    <NuxtLink to="/" class="pl-[2%]">
      <img src="~/assets/logo/bialy-bok.svg" alt="Logo" class="h-48 w-full">
    </NuxtLink>
    <div class="hidden h-12 w-px bg-white opacity-30 sm:inline-block"></div>
    <div class="w-fit flex justify-start items-center font-light">
      <div class="space-x-8 ml-10">
        <NuxtLink to="/losuj">Losuj serwer</NuxtLink>
        <NuxtLink to="/dodaj">Dodaj serwer</NuxtLink>
        <NuxtLink to="/premium">
          <UtilsSpanGradient class="w-full text-center" text="Premium" weight="medium" tabindex="-1"/>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row justify-end ml-auto mr-[3%] space-x-6 text-lg">
      <button class="w-48 h-16 rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-5 shadow-blur backdrop-blur-[20%]">Rozpocznij teraz</button>
      <button class="w-36 h-16 rounded-2xl bg-craftlist-gradient text-background-color">Zaloguj się</button>
    </div>
  </nav>
</template>