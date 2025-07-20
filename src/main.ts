import { createApp, h } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'

// Vuetify
import 'vuetify/_styles.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import TransfusionIcon from './components/icons/TransfusionIcon.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      transfusion: 'custom:transfusion',
    },
    sets: { 
      mdi,
      custom: {
        // @ts-ignore - Custom icon set
        transfusion: (props: any) => h(TransfusionIcon, props),
      },
     },
  },
})

const app = createApp(App)
app.use(i18n)
app.use(vuetify)
app.mount('#app')
