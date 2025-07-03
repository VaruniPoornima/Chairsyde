<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: $background-white;
  overflow: hidden;
  font-family: $font-family-primary;
}

.main-content {
  flex: 1;
  margin-left: $sidebar-width;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  min-width: 0;
  
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
}
</style> 