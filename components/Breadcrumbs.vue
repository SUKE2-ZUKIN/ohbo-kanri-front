<template>
  <v-breadcrumbs :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>