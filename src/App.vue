<template>
  <v-app>
    <AppBar :model-value="currentLocale" @update:locale="changeLocale" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <v-card class="pa-6">
              <FormSection @submit="handleSubmit" />
              <ResultSection v-if="probability !== null" :value="probability" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import FormSection from './components/FormSection.vue'
import ResultSection from './components/ResultSection.vue'
import AppBar from './components/AppBar.vue'
import FooterBar from './components/FooterBar.vue'

const probability = ref(null)
function handleSubmit(value) {
  probability.value = value
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }, 100)
}

// i18n locale switching
const { locale, availableLocales, t } = useI18n()
const locales = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  { value: 'es', label: 'Español' }
]
const currentLocale = ref(locale.value)
function changeLocale(val) {
  locale.value = val
}

// Set initial document title and update on locale change
watch(locale, () => {
  document.title = t('title')
  document.getElementById('html-root')?.setAttribute('lang', locale.value)
}, { immediate: true })

// Vuetify dark/light mode
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'myTheme' : 'dark'
}
</script>

<style scoped>
.v-toolbar-title.text-center {
  text-align: center;
  width: 100%;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}

:global(body) {
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
