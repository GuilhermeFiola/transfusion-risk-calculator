<template>
  <v-card class="text-center pa-4">
    <v-card-text>
      <RiskGauge :probability="props.value" />
      <div class="text-h4 text-medium-emphasis text-center mt-4">
        {{ riskAdvice }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import RiskGauge from './RiskGauge.vue'

const props = defineProps<{ value: number }>()
const { t } = useI18n()

const percent = computed(() => Math.round(props.value * 100))

const riskAdvice = computed(() => {
  if (percent.value <= 30) return t('advice.low')
  if (percent.value <= 70) return t('advice.moderate')
  return t('advice.high')
})
</script>

<style scoped>
</style> 