import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                prueba1: resolve(__dirname, './pages/prueba1.html'),
                prueba2: resolve(__dirname, './pages/prueba2.html'),
                prueba3: resolve(__dirname, './pages/prueba3.html'),
                prueba4: resolve(__dirname, './pages/prueba4.html'),
                prueba5: resolve(__dirname, './pages/prueba5.html')
            },
        },
    }
})