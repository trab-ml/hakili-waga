<script setup lang="ts">
const { $t } = useI18n();
const keys = [
    "identity",
    "culture",
    "complex",
    "history",
    "education",
] as const;
const travel = ["manden", "kaabu", "sierra", "kano", "borgou"] as const;
const siteUrl = useRuntimeConfig().public.siteUrl;

useSeoMeta({
    title: () => $t("meta.title"),
    description: () => $t("meta.description"),
    ogTitle: () => $t("meta.title"),
    ogDescription: () => $t("meta.description"),
    ogType: "website",
    ogUrl: siteUrl || undefined,
});
useHead({ meta: [{ name: "keywords", content: () => $t("meta.keywords") }] });
</script>

<template>
    <ProverbHero />

    <section
        id="questions"
        class="mx-auto max-w-3xl px-4 py-14"
        aria-labelledby="q-title"
    >
        <h2
            id="q-title"
            class="font-display text-2xl font-extrabold text-[--color-indigo-night] sm:text-4xl"
        >
            {{ $t("questions.title") }}
        </h2>
        <p class="mt-3">{{ $t("questions.intro") }}</p>
        <div class="mt-8 grid gap-4">
            <details
                v-for="k in keys"
                :key="k"
                class="border border-stone-400 bg-white open:border-[--color-banco]"
            >
                <summary
                    class="min-h-14 cursor-pointer px-4 py-3 font-display text-lg font-semibold text-[--color-indigo-night]"
                >
                    <span
                        class="me-2 font-sans text-sm font-normal text-[--color-banco]"
                        >{{ $t(`sections.${k}.label`) }}</span
                    >
                    {{ $t(`sections.${k}.q`) }}
                </summary>
                <div class="border-t border-stone-300 px-4 py-4">
                    <p class="mb-3">{{ $t(`sections.${k}.a1`) }}</p>
                    <p>{{ $t(`sections.${k}.a2`) }}</p>
                </div>
            </details>
        </div>
    </section>

    <section id="travel" class="bg-white px-4 py-14" aria-labelledby="t-title">
        <div class="mx-auto max-w-3xl">
            <h2
                id="t-title"
                class="font-display text-2xl font-extrabold text-[--color-indigo-night] sm:text-4xl"
            >
                {{ $t("travel.title") }}
            </h2>
            <p class="mb-6 mt-3">{{ $t("travel.intro") }}</p>
            <TravelMap />
            <ol class="mt-8 grid gap-5">
                <li v-for="(k, i) in travel" :key="k" class="flex gap-3">
                    <span
                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[--color-indigo-night] font-semibold text-white"
                        aria-hidden="true"
                        >{{ i + 1 }}</span
                    >
                    <div>
                        <h3
                            class="font-display text-lg font-semibold text-[--color-indigo-night]"
                        >
                            {{ $t(`travel.items.${k}.place`) }}
                        </h3>
                        <p>{{ $t(`travel.items.${k}.text`) }}</p>
                    </div>
                </li>
            </ol>
            <p class="mt-8 border-s-4 border-[--color-banco] ps-4">
                {{ $t("travel.caveat") }}
            </p>
            <p class="mt-3 text-sm text-stone-700">
                {{ $t("travel.sources") }}
            </p>
        </div>
    </section>

    <section
        id="contact"
        class="bg-stone-100 px-4 py-14"
        aria-labelledby="c-title"
    >
        <div class="mx-auto max-w-xl">
            <h2
                id="c-title"
                class="font-display text-2xl font-extrabold text-[--color-indigo-night] sm:text-4xl"
            >
                {{ $t("contact.title") }}
            </h2>
            <p class="mb-8 mt-3">{{ $t("contact.intro") }}</p>
            <ContactForm />
        </div>
    </section>
</template>
