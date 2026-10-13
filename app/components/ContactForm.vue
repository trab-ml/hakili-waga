<script setup lang="ts">
import emailjs from '@emailjs/browser'

const { $t } = useI18n()
const cfg = useRuntimeConfig().public
const form = reactive({ name: '', email: '', type: 'opinion', message: '', website: '' })
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')

async function submit() {
  if (form.website) return // honeypot anti-spam
  status.value = 'sending'
  try {
    await emailjs.send(
      cfg.emailjsServiceId as string, cfg.emailjsTemplateId as string,
      { from_name: form.name, reply_to: form.email, type: form.type, message: form.message },
      { publicKey: cfg.emailjsPublicKey as string }
    )
    status.value = 'ok'
    Object.assign(form, { name: '', email: '', message: '' })
  } catch { status.value = 'error' }
}
const field = 'mt-1 block min-h-12 w-full border border-stone-500 bg-white px-3 py-2 text-base text-stone-900'
</script>

<template>
  <form class="grid gap-5" @submit.prevent="submit">
    <div>
      <label for="c-name" class="font-semibold">{{ $t('contact.name') }}</label>
      <input id="c-name" v-model="form.name" :class="field" type="text" autocomplete="name" required>
    </div>
    <div>
      <label for="c-email" class="font-semibold">{{ $t('contact.email') }}</label>
      <input id="c-email" v-model="form.email" :class="field" type="email" autocomplete="email" required>
    </div>
    <div>
      <label for="c-type" class="font-semibold">{{ $t('contact.type') }}</label>
      <select id="c-type" v-model="form.type" :class="field">
        <option value="opinion">{{ $t('contact.opinion') }}</option>
        <option value="suggestion">{{ $t('contact.suggestion') }}</option>
        <option value="proverb">{{ $t('contact.proverb') }}</option>
      </select>
    </div>
    <div>
      <label for="c-msg" class="font-semibold">{{ $t('contact.message') }}</label>
      <textarea id="c-msg" v-model="form.message" :class="field" rows="6" required />
    </div>
    <input v-model="form.website" class="hidden" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" :disabled="status === 'sending'" class="min-h-12 bg-[--color-indigo-night] px-6 py-3 font-semibold text-white hover:bg-[--color-indigo-night] disabled:opacity-60">
      {{ status === 'sending' ? $t('contact.sending') : $t('contact.send') }}
    </button>
    <p v-if="status === 'ok'" role="status" class="font-semibold text-green-800">{{ $t('contact.ok') }}</p>
    <p v-if="status === 'error'" role="alert" class="font-semibold text-red-800">{{ $t('contact.error') }}</p>
  </form>
</template>
