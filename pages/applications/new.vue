<template>
  <application-form 
    :company="company" 
    :position="position" 
    :description="description" 
    :source="source" 
    :url="url"
  />
</template>

<script setup>
import ApplicationForm from '@/components/pages/ApplicationForm.vue'
</script>

