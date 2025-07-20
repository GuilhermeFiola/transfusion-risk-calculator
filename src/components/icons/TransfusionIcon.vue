<template>
  <div :class="colorClass" :style="{ width: size + 'px', height: size + 'px' }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      :width="size"
      :height="size"
      fill="currentColor"
    >
      <g>
        <rect x="5" y="10" width="24" height="40" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
        <rect x="10" y="14" width="14" height="6" rx="1" fill="currentColor"/>
        <circle cx="12" cy="26" r="2" />
        <circle cx="18" cy="26" r="2" />
        <circle cx="12" cy="32" r="2" />
        <circle cx="18" cy="32" r="2" />
        <rect x="10" y="36" width="14" height="4" rx="1" />
        
        <rect x="35" y="10" width="24" height="40" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M47 20c-5 4-6 8-6 10a6 6 0 0 0 12 0c0-2-1-6-6-10z" />
        
        <path d="M29 32h6" stroke="currentColor" stroke-width="2" fill="none"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: [String, Number],
    default: 64
  }
})

const colorClass = computed(() => {
  if (props.color) {
    return `text-${props.color}`
  }
  return 'text-primary'
})
</script>

<style scoped>
.text-primary {
  color: rgb(var(--v-theme-primary)) !important;
}
.text-secondary {
  color: rgb(var(--v-theme-secondary)) !important;
}
.text-white {
  color: white !important;
}
</style>