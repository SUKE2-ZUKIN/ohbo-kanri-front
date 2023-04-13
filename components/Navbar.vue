<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('toggleSidebar')"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
// v-toolbar-title に表示するタイトルを定義
const title = '応募管理アプリ'
</script>