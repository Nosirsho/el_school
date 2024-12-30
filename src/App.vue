<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import Header from './components/Header/Header.vue'
import Main from './components/Main/Main.vue'
</script>

<template>
  <div class="grid grid-rows-12 grid-cols-12 gap-1 bg-red-300 h-screen">
    <!-- Sidebar-->
    <Sidebar />
    <!-- Sidebar-->
    <!-- Header-->
    <Header />
    <!-- Header-->
    <!-- Main-->
    <Main />
    <!-- Main-->
  </div>
</template>
