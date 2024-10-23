<template>
    <div class="article">
      <h1 v-text="article.title"></h1>
      <div class="banner-one">
        <img class="banner-image-one" :src="require('@/assets/Photo.png')" alt="banner" />
      </div>
      <div class="banner-one">
        <img class="banner-image-one" :src="require('@/assets/Quotes.png')" alt="banner" />
      </div>
      <div class="paragraph" v-for="(paragraph, index) in article.content" :key="index" v-text="paragraph"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        article: Object
    }
  }
  </script>
  
  <style scoped>
  .article {
    margin-bottom: 20px;
  }
  .banner-one {
    margin-bottom: 10px;
  }
  </style>