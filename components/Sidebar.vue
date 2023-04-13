<template>
  <v-list>
    <v-list-item-group> 
      <v-list-item 
        v-for="item in items" 
        :key="item.title" 
        :to="item.path"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script setup>
const items = [
  { 
    icon: 'mdi-home', 
    title: 'ホーム',
    path: '/'
  },
  { 
    icon: 'mdi-format-list-bulleted',
    title: '応募リスト',
    path: '/applications'
  },
]
</script>