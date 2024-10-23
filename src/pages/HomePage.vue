<template>
    <div>
  
        <UniqueHouse/>
        <ProjectHome/>
        <CounterHome/>
        <BlogHome/>
        
       
        
    </div>
</template>

<script>

import UniqueHouse from '@/components/homepage/UniqueHouse.vue';
import ProjectHome from '@/components/homepage/ProjectHome.vue';
import CounterHome from '@/components/homepage/CounterHome.vue';
import BlogHome from '@/components/homepage/BlogHome.vue';

export default {
  name: 'HomePage',
  components: {
 
    UniqueHouse,
    ProjectHome,
    CounterHome,
    BlogHome,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
