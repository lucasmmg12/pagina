import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                automatizaciones: resolve(__dirname, 'solutions/automatizaciones.html'),
                rag_institucional: resolve(__dirname, 'solutions/rag-institucional.html'),
                aplicaciones_digitales: resolve(__dirname, 'solutions/aplicaciones-digitales.html'),
                sistema_integral: resolve(__dirname, 'solutions/sistema-integral.html'),
                analisis_datos: resolve(__dirname, 'solutions/analisis-datos.html'),
            },
        },
    },
});
