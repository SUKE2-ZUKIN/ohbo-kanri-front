<template>
  <!-- 応募件数を表示する -->
  <v-card>
    <v-card-title>
      <h2>応募件数</h2>
    </v-card-title>
    <v-card-text>
      <h1>{{ applications.length }}</h1>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const applications = [
  {
    id: 1,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 2,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 3,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 4,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 5,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 6,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
    source: 'Twitter',
    url: 'https://hacathon.com'
  },
  {
    id: 7,
    company: '株式会社ハッカソン',
    position: 'エンジニア',
    description: 'ハッカソンを開催する会社です',
  }
]
</script>