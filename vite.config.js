import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import FullReload from "vite-plugin-full-reload";
import path from "path";

export default defineConfig({
    plugins: [symfonyPlugin({}), FullReload(["templates/**/*.twig"])],
    server: {
        hmr: {
            host: "localhost",
            port: 5173,
            protocol: "ws",
        },
    },
    build: {
        rollupOptions: {
            input: {
                app: "./assets/main.js",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "assets"),
            "@styles": path.resolve(__dirname, "assets/styles"),
            "@scripts": path.resolve(__dirname, "assets/scripts"),
        },
    },
});
