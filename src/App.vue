<template>
  <Navbar />
  <HomePage />
  <AboutPage />
  <SkillsPage />
  <ProjectsPage />
  <ContactPage />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HomePage from './Pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import SkillsPage from './Pages/SkillsPage.vue';
import ProjectsPage from './Pages/ProjectsPage.vue';
import ContactPage from './Pages/ContactPage.vue';
</script>

<style lang="scss" scoped>

</style>