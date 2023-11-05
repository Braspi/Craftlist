<script setup lang="ts">
import {showBurger} from "assets/utils/navBurgerLib";
</script>

<template>
  <div class="z-40 w-screen h-screen absolute top-0 backdrop-blur-xl">
    <div class="text-6xl absolute right-[10%] top-[8%]" @click="showBurger()" @onkeypress="showBurger()" role="button" tabindex="0">
      <UIcon name="i-heroicons-x-mark" />
    </div>
    <div class="flex items-center justify-center h-[60%]">
      <div class="flex flex-col items-center justify-around gap-12 text-xl">
        <NuxtLink to="/">Losuj serwer</NuxtLink>
        <NuxtLink to="/">Dodaj serwer</NuxtLink>
        <NuxtLink to="/">
          <UtilsSpanGradient text="Premium" weight="medium" tabindex="-1"/>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row justify-center ml-auto space-x-6 text-lg">
      <button class="w-48 h-16 rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-5 shadow-blur backdrop-blur-[20%]">Rozpocznij teraz</button>
      <button class="w-36 h-16 rounded-2xl bg-craftlist-gradient text-background-color">Zaloguj się</button>
    </div>
  </div>
</template>