<template>
  <v-app>
    <navbar @toggleSidebar="toggleSidebar" />
    <v-main>
      <v-navigation-drawer app 
        :model-value="isSidebarOpen" 
        @update:model-value="isSidebarOpen = $event"
      >
        <sidebar />
      </v-navigation-drawer>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>