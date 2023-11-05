<script setup lang="ts">
import {showBurger, showBurgerDiv} from "assets/utils/navBurgerLib";
import NavBurger from "~/components/utils/NavBurger.vue";
</script>

<template>
  <header class="z-50 relative bg-craftlist-gradient w-screen flex justify-center items-center py-1 text-white">
    <NuxtLink to='/premium' class="text-sm font-medium">👋 Pierwsze 10 dni <span class="uppercase font-bold">premium</span> za 50%!👋</NuxtLink>
  </header>
  <nav class="z-30 w-screen md:flex select-none top-0 sticky items-center text-xl text-white">
    <div class="flex items-center">
      <NuxtLink to="/">
        <img src="~/assets/logo/bialy-bok.svg" alt="Logo" class="h-48 md:h-32 lg:h-36 xl:h-48">
      </NuxtLink>
      <div class="ml-auto mr-[10%] text-6xl md:hidden" @click="showBurger()" @onkeypress="showBurger()" role="button" tabindex="0">
        <UIcon name="i-heroicons-bars-3-bottom-right" />
      </div>
    </div>
    <div class="md:flex md:items-center md:justify-center">
      <div class="hidden h-8 xl:h-12 w-px bg-white opacity-30 md:inline-block"/>
      <div class="hidden w-fit font-light space-x-8 sm:ml-7 xl:ml-10 md:inline-block md:text-base xl:text-xl">
        <NuxtLink to="/">Losuj serwer</NuxtLink>
        <NuxtLink to="/">Dodaj serwer</NuxtLink>
        <NuxtLink to="/">
          <UtilsSpanGradient class="w-full" text="Premium" weight="medium" tabindex="-1"/>
        </NuxtLink>
      </div>
    </div>
    <navBurger v-if="showBurgerDiv" />
      <div class="hidden md:flex md:justify-center md:items-center ml-auto mr-[3%] space-x-6 sm:text-sm xl:text-lg">
        <button class="sm:w-32 xl:w-48 sm:h-12 xl:h-16 rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-5 shadow-blur backdrop-blur-[20%]">Rozpocznij teraz</button>
        <button class="sm:w-24 xl:w-36 sm:h-12 xl:h-16 rounded-2xl bg-craftlist-gradient text-background-color">Zaloguj się</button>
      </div>
  </nav>
</template>