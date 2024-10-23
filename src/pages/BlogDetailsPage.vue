<template>
  <div>
      <BlogDet :imageUrl="require('../assets/Banner.png')"
               :imageUrlOne="require('../assets/DetPhoto.png')"
               :textOne="textToShow"
               :imageUrlTwo="require('../assets/Quotes.png')"
               :textTwo="textToShowTwo"/>
  </div>
</template>

<script>
import BlogDet from '@/components/blogDetails/BlogDet.vue';




export default {
  name: 'BlogDetailsPage',
  components: {
    BlogDet,
  },
  data() {
    return {
      textToShow: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
      textToShowTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»'   
    }
  }    
};    

</script>

<style scoped>

</style>