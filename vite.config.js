import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'; // плагин для того чтобы подружить лару и вью.


export default defineConfig({
    // server - для локальной разработке на sail, на WSL2 Wind
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        vue(), // тут он подключается и теперь vite умеет работать с vue
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
