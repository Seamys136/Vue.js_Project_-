<template class>
  <div id="app">
    <div class="body">

      <CompHeader :imageUrl="require('../src/assets/LogoO.png')" logoName ="Interno"/> 

      <BlogDetailsPage />
      
      <CompFooter :imageUrl="require('../src/assets/LogoO.png')" logoName ="Interno"/>

    </div>
  </div>
 

</template>

<script>


import CompFooter from './components/CompFooter.vue';
import CompHeader from './components/CompHeader.vue';
import BlogDetailsPage from './pages/BlogDetailsPage.vue';




export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter,
    BlogDetailsPage,
  }
}

</script>

<style>
.body {
  width: 1200px;
  max-width: 100%;
  min-width: 785px;

}  

.logo {
  width: 30px;
}



</style>
