<script lang="ts" setup>
import {showBurgerDiv} from "assets/utils/navBurgerLib";
import NavBurger from "~/components/utils/NavBurger.vue";

document.body.classList.add('bg-background-color')

</script>

<template>
  <div>
    <NavBurger v-if="showBurgerDiv" />
    <div v-if="showBurgerDiv" class="backdrop-blur-xl w-screen h-screen fixed z-20" />
    <section class="flex flex-col h-screen text-white">
      <Nav/>
      <main class="flex-grow z-10 w-screen m-auto relative scroll-smooth px-[5vw]">
        <slot />
      </main>
      <Footer/>
    </section>
    <aside class="background fixed inset-0 z-0 bg-background-gradient bg-repeat-y bg-center bg-full ease-out duration-[2500ms] transition-opacity"></aside>
  </div>
</template>