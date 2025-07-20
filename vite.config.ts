// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/PENDENTE/', // <-- Substitua por /nome-do-repo/ antes do deploy
  plugins: [vue()],
})
