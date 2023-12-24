<template>
  <Alert></Alert>
  <Breadcrumb></Breadcrumb>
</template>

<script>
import Alert from './components/Alert.vue';
import Breadcrumb from './components/Breadcrumb.vue'; 
export default {
  name: 'App',
  components: {
    Alert,
    Breadcrumb,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
