<script lang="ts" setup>
document.body.classList.add('bg-background-color')
</script>

<template>
  <NavComponent/>
  <main class="z-30 w-screen m-auto relative grid place-content-center scroll-smooth bg-background-color">
  </main>
  <aside class="background fixed inset-0 z-0 bg-background-gradient bg-repeat-y bg-center bg-full ease-out duration-[2500ms] transition-opacity"></aside>
</template>