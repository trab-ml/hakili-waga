<script setup lang="ts">
const { $t } = useI18n();
</script>

<template>
    <a
        href="#main"
        class="sr-only focus:not-sr-only focus:fixed focus:start-2 focus:top-2 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-[--color-indigo-night]"
    >
        {{ $t("nav.skip") }}
    </a>
    <header class="bg-[--color-indigo-night] text-white">
        <div
            class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3"
        >
            <a
                href="#top"
                class="font-display text-xl font-extrabold text-[--color-ochre]"
                >{{ $t("brand") }}</a
            >
            <nav
                class="flex flex-wrap items-center gap-1"
                :aria-label="$t('nav.label')?.toString()"
            >
                <a
                    href="#questions"
                    class="inline-flex min-h-12 items-center px-3 hover:underline"
                    >{{ $t("nav.questions") }}</a
                >
                <a
                    href="#contact"
                    class="inline-flex min-h-12 items-center px-3 hover:underline"
                    >{{ $t("nav.contact") }}</a
                >
                <LangSwitcher />
            </nav>
        </div>
    </header>
    <main id="main"><slot /></main>
    <footer
        class="bg-[--color-indigo-night] px-4 py-8 text-center text-sm text-stone-200"
    >
        <p>
            © {{ new Date().getFullYear() }} {{ $t("brand") }} —
            {{ $t("footer") }}
        </p>
    </footer>
</template>
