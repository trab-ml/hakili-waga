<script setup lang="ts">
import data from '~/data/proverbs.json'
type Proverb = { id: number; bm: string; fr: string; en: string }
const list = data as Proverb[]
const { $t, $getLocale } = useI18n()
const current = ref<Proverb>(list[0]!)

function pick() {
  let next = current.value
  if (list.length > 1) while (next.id === current.value.id) next = list[Math.floor(Math.random() * list.length)]!
  current.value = next
}
onMounted(() => { current.value = list[Math.floor(Math.random() * list.length)]! })

const translation = computed(() => ($getLocale() === 'en' ? current.value.en : current.value.fr))
</script>

<template>
  <section id="top" class="bg-[--color-indigo-night] px-4 py-14 text-white sm:py-24" aria-labelledby="hero-title">
    <div class="mx-auto max-w-3xl">
      <h1 id="hero-title" class="font-display text-3xl font-extrabold leading-tight sm:text-5xl">{{ $t('hero.title') }}</h1>
      <p class="mt-4 max-w-prose text-stone-200">{{ $t('hero.intro') }}</p>

      <figure class="mt-10 border-s-4 border-[--color-ochre] ps-5" aria-live="polite">
        <blockquote
          class="font-display text-2xl font-semibold text-[--color-ochre] sm:text-4xl"
          lang="bm"
        >{{ current.bm }}</blockquote>
        <figcaption class="mt-3 text-lg text-stone-100">{{ translation }}</figcaption>
      </figure>

      <button type="button" class="mt-8 min-h-12 bg-[--color-ochre] px-6 py-3 font-semibold text-[--color-indigo-night] hover:bg-amber-300" @click="pick">
        {{ $t('hero.another') }}
      </button>
    </div>
  </section>
</template>
