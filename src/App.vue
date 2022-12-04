<template>
  <div class="main-page flex">
    <LeftMenu />
    <CenterBlock />
  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import LeftMenu from './components/LeftMenu.vue';
import CenterBlock from './components/CenterBlock.vue'
export default {
  name: 'App',
  components: {
    LeftMenu,
    CenterBlock
  },
 
}
</script>

<style>
html, body, #app, .main-page{
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
.main-page{
  background-color: rgb(11, 11, 51);
}
.flex{
  display: flex;
  align-items: center;
}
</style>
