import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/quiz-Fellipe-Babi/', // Altere para o nome do seu repositório ou caminho de base adequado
  plugins: [react()]
})
