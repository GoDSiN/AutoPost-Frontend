<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style>
</style>
