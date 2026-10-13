// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-i18n-micro", "@nuxtjs/tailwindcss"],
    compatibilityDate: "2026-10-13",
    devtools: { enabled: true },
    ssr: true,
    nitro: { preset: "github_pages", prerender: { crawlLinks: true } },
    app: {
        baseURL: "/hakili-waga",
    },
    i18n: {
        locales: [
            { code: "fr", iso: "fr-FR", dir: "ltr", displayName: "Français" },
            { code: "en", iso: "en-US", dir: "ltr", displayName: "English" },
            { code: "bm", iso: "bm-ML", dir: "ltr", displayName: "Bamanankan" },
        ],
        defaultLocale: "bm",
        fallbackLocale: "bm",
        strategy: "no_prefix",
        translationDir: "locales",
        meta: true,
        localeCookie: "user-locale",
    },
});
