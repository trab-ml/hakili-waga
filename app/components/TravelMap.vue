<script setup lang="ts">
const { $t } = useI18n()
const proj = (lon: number, lat: number) => ({ x: (lon + 17) * 13.3, y: (19 - lat) * 13.3 })
const pts = [
  { k: 'manden', n: 1, ...proj(-8.4, 11.9), home: true },
  { k: 'kaabu', n: 2, ...proj(-14.8, 12.8) },
  { k: 'sierra', n: 3, ...proj(-11.8, 8.5) },
  { k: 'kano', n: 4, ...proj(8.5, 12.0) },
  { k: 'borgou', n: 5, ...proj(3.0, 9.8) }
]
const home = pts[0]!
</script>

<template>
  <figure>
    <svg viewBox="0 0 360 180" class="w-full rounded bg-[--color-indigo-night]" role="img" :aria-label="$t('travel.mapLabel')?.toString()">
      <g stroke="#e3a63a" stroke-width="1.5" stroke-dasharray="4 4" opacity=".7">
        <line v-for="p in pts.slice(1)" :key="p.k" :x1="home.x" :y1="home.y" :x2="p.x" :y2="p.y" />
      </g>
      <g v-for="p in pts" :key="p.k" aria-hidden="true">
        <circle :cx="p.x" :cy="p.y" r="12" :fill="p.home ? '#e3a63a' : '#faf7f2'" />
        <text :x="p.x" :y="p.y + 5" text-anchor="middle" font-size="14" font-weight="700" fill="#1c2541">{{ p.n }}</text>
      </g>
    </svg>
    <figcaption class="mt-2 text-sm text-stone-700">{{ $t('travel.mapNote') }}</figcaption>
  </figure>
</template>
