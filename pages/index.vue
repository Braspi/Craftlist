<script lang="ts" setup>
import {showBurgerDiv} from "assets/utils/navBurgerLib";

document.body.classList.add('bg-background-color')
</script>

<template>
  <div v-if="showBurgerDiv" class="backdrop-blur-xl w-screen h-screen fixed z-40" />
  <section class="flex flex-col h-screen">
    <NavComponent />
    <main class="flex-grow z-30 w-screen m-auto relative scroll-smooth">
    </main>
    <FooterComponent />
  </section>
  <aside class="background fixed inset-0 z-0 bg-background-gradient bg-repeat-y bg-center bg-full ease-out duration-[2500ms] transition-opacity"></aside>
</template>