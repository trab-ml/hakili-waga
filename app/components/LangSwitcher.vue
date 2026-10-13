<script setup lang="ts">
const { $getLocale, $switchLocale, $getLocales, $t } = useI18n()
const locales = $getLocales()
</script>

<template>
  <div role="group" :aria-label="$t('nav.language')?.toString()" class="flex">
    <button
      v-for="l in locales" :key="l.code" type="button"
      :lang="l.code" :aria-pressed="$getLocale() === l.code"
      class="min-h-12 min-w-12 px-3 text-base font-semibold hover:bg-white/10 aria-pressed:bg-[--color-ochre] aria-pressed:text-[--color-indigo-night]"
      @click="$switchLocale(l.code)"
    >{{ l.code.toUpperCase() }}</button>
  </div>
</template>
