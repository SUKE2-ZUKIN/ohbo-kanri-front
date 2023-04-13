<template>
  <v-form>
    <v-text-field label="会社名" v-model="company" />
    <v-text-field label="職種" v-model="position" />
    <v-text-field label="事業内容" v-model="description" />
    <v-text-field label="応募媒体" v-model="source" />
    <v-text-field label="URL" v-model="url" />
    <v-btn color="primary" text>保存</v-btn>    
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const company = ref('')
const position = ref('')
const description = ref('')
const source = ref('')
const url = ref('')
</script>