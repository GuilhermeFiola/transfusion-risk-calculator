<template>
  <v-footer color="secondary" app class="d-flex justify-center align-center">
    <v-container class="text-center">
      <span class="white--text">{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</span>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.v-footer {
  min-height: 56px;
}
.white--text {
  color: #fff !important;
}
</style> 