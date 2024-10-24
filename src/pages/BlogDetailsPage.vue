<template>
  <div>
      <BlogDet :imageUrl="require('../assets/Banner.png')"
               :imageUrlOne="require('../assets/DetPhoto.png')"
               :textOne="textToShow"
               :imageUrlTwo="require('../assets/Quotes.png')"
               :textTwo="textToShowTwo"/>
      <ParagraphsDet />        
         
  </div>
</template>

<script>
import BlogDet from '@/components/blogDetails/BlogDet.vue';
import ParagraphsDet from '@/components/blogDetails/ParagraphsDet.vue';

export default {
  name: 'BlogDetailsPage',
  components: {
    BlogDet,
    ParagraphsDet,
  },
  data() {
    return {
      textToShow: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
      textToShowTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' ,  
      paragraphs: [
        'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
        'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
        'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
      ],
    }
  }    
};    

</script>

<style scoped>

</style>