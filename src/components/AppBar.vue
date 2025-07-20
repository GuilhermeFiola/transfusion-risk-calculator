<template>
  <v-toolbar color="secondary" dark flat height="80">
    <TransfusionIcon color="white" class="mr-2 ml-4" />
    <v-toolbar-title
      v-if="width >= 350"
      :class="[width < 700 ? 'text-h5 text-left' : (width < 900 ? 'text-h4 text-center' : 'text-h3 text-center'), 'w-100']"
      style="line-height: 60px"
    >
      <template v-if="width < 450">
        {{ te('titleShort') ? t('titleShort') : t('title') }}
      </template>
      <template v-else>
        {{ t('title') }}
      </template>
    </v-toolbar-title>
    
    <template v-if="!showMenu">
      <v-select
        v-model="currentLocale"
        :items="locales"
        item-title="label"
        item-value="value"
        hide-details
        variant="underlined"
        @update:modelValue="changeLocale"
        style="max-width: 150px;"
        class="justify-end ml-2"
      />
      <v-btn icon class="ml-2" @click="toggleTheme" :title="isDark ? t('ui.lightMode') : t('ui.darkMode')" :aria-label="isDark ? t('ui.lightMode') : t('ui.darkMode')">
        <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-menu v-model="menu" :close-on-content-click="false" offset-y>
        <template #activator="{ props }">
          <v-btn icon v-bind="props" aria-label="Menu" title="Menu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-select
              v-model="currentLocale"
              :items="locales"
              item-title="label"
              item-value="value"
              hide-details
              variant="underlined"
              @update:modelValue="changeLocale"
              style="max-width: 150px;"
            />
          </v-list-item>
          <v-list-item>
            <v-btn block @click="toggleTheme">
              <v-icon left>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
              {{ isDark ? t('ui.lightMode') : t('ui.darkMode') }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-toolbar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme, useDisplay } from 'vuetify'
import TransfusionIcon from './icons/TransfusionIcon.vue'

const emit = defineEmits(['update:locale'])
const props = defineProps({
  modelValue: String
})

const { locale, t, te } = useI18n()
const locales = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  { value: 'es', label: 'Español' }
]
const currentLocale = ref(props.modelValue || locale.value)
function changeLocale(val) {
  locale.value = val
  emit('update:locale', val)
}

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'myTheme' : 'dark'
}

const { width } = useDisplay()
const showMenu = computed(() => width.value < 1400)
const menu = ref(false)
</script>

<style scoped>
.v-toolbar-title {
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style> 