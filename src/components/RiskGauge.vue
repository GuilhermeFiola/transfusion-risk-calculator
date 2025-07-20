<template>
  <div class="d-flex flex-column align-center justify-center my-6" style="width: 100%;">
    <svg :width="size" :height="size" viewBox="0 0 36 36">
      <path
        class="text-grey-lighten-3"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        transform="rotate(-90 18 18)"
      />
      <path
        :class="gaugeColor"
        :d="`M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831`"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-dasharray="100, 100"
        :stroke-dashoffset="100 - percent"
        stroke-linecap="round"
        transform="rotate(-90 18 18)"
      />
      <text x="18" y="20.35" class="svg-label" :class="{ 'svg-label-dark': isDark }" style="font-size: 10px important!;" text-anchor="middle" alignment-baseline="middle">
        {{ percent }}%
      </text>
    </svg>
    <div class="mt-2 text-h4 font-weight-medium" :class="gaugeColor">{{ riskLabel }}</div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const props = defineProps({
  probability: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    default: 180
  }
})

const { t } = useI18n()

const percent = computed(() => Math.round(props.probability * 100))

const gaugeColor = computed(() => {
  if (percent.value <= 30) return 'text-success'
  if (percent.value <= 70) return 'text-warning'
  return 'text-error'
})

const riskLabel = computed(() => {
  if (percent.value <= 30) return t('risk.low')
  if (percent.value <= 70) return t('risk.moderate')
  return t('risk.high')
})

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
</script>

<style scoped>
svg {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.svg-label {
  font-size: 10px;
  font-weight: bold; /* se não quiser depender da classe do Vuetify */
}

.svg-label-dark {
  fill: #fff;
}
</style>
