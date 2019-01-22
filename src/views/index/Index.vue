<template>
  <div class="app-container">
    <PolarArea />
  </div>
</template>

<script>
  const PolarArea = () => import("@/components/Chart/PolarArea")
  export default {
    name: 'Index',
      components: { PolarArea },
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">


</style>
