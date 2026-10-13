const baseURL = import.meta.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
    modules: ["nuxt-i18n-micro", "@nuxtjs/tailwindcss"],
    compatibilityDate: "2026-10-13",
    devtools: { enabled: false },
    ssr: true,
    css: ["~/assets/css/main.css"],
    nitro: { preset: "github_pages", prerender: { crawlLinks: true } },
    app: {
        baseURL,
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { name: "geo.region", content: "ML" },
                { name: "geo.placename", content: "Mandé, Afrique de l'Ouest" },
            ],
            link: [
                {
                    rel: "icon",
                    href: `${baseURL}favicon.svg`,
                    type: "image/svg+xml",
                },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Noto+Sans:wght@400;600&display=swap",
                },
            ],
        },
    },
    runtimeConfig: {
        public: {
            siteUrl: import.meta.env.NUXT_PUBLIC_SITE_URL || "",
            emailjsServiceId: import.meta.env.NUXT_EMAIL_SERVICE_ID,
            emailjsTemplateId: import.meta.env.NUXT_EMAIL_TEMPLATE_ID,
            emailjsPublicKey: import.meta.env.NUXT_EMAIL_PUBLIC_KEY,
        },
    },
    i18n: {
        locales: [
            { code: "bm", iso: "bm-ML", dir: "ltr", displayName: "Bamanankan" },
            { code: "fr", iso: "fr-FR", dir: "ltr", displayName: "Français" },
            { code: "en", iso: "en-US", dir: "ltr", displayName: "English" },
        ],
        defaultLocale: "bm",
        fallbackLocale: "bm",
        strategy: "no_prefix",
        translationDir: "locales",
        meta: true,
        localeCookie: "user-locale",
    },
});
