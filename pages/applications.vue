<template>
  <Breadcrumbs :items="breadcrumbs" />
  <NuxtPage />
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'

const breadcrumbs = [
  { text: 'ホーム', href: '/' },
  { text: 'Applications', href: '/applications' },
  { text: 'New', href: '/applications/new' }
]
</script>