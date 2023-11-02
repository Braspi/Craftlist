<template>
  <span v-if="color == null" :class="`bg-craftlist-gradient bg-clip-text text-transparent font-${weight} ${casing}`">
    {{ text }}
  </span>
  <span v-else :class="`${parseColor()} bg-clip-text text-transparent font-${weight} ${casing}`">
    {{ text }}
  </span>
</template>

<script lang="ts">
export default {
  name: "TextGradient",
  props: {
    text: String,
    color: String,
    casing: String,
    weight: String,
  },
  methods: {
    parseColor():string {
      return `bg-${this.color}-gradient`;
    }
  },
}
</script>