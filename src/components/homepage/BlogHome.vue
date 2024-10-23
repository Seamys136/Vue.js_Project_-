<template>
    <div id="app" class="app">
      <div class="title">
        <h1 class="news">{{ title }}</h1>
        <h2 class="new-pro-text">{{ text }}</h2>
      </div>
      <div class="gallery">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="gallery-item">
          <img 
            :src="require(`@/assets/${image}`)" 
            :alt="'Image ' + (index + 1)" 
            class="gallery-image" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHome',

data() {
      return {
        images: [
        'Kit.png',
        'Life.png',
        'Int.png',
    ],
        title: 'Статьи & Новости',
        text: 'Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы'
    };
    }
}



</script>

<style scoped>
    
    .title {
        text-align: center;
        padding: 0 130px;
    }

    .news {
        margin: 50px 0 30px 530px;
        width: 230px;
        font-size: 50px;
        color: #4d5053
    }

    .title, .new-pro-text, .news {
        font-family: 'DM Serif Display', Helvetica, sans-serif;
        color: #292f36;
    
    }

    .new-pro-text {
        font-size: 20px;
        margin: 0px 100px 20px 390px;
        width: 520px;
    }

    .gallery {
        display: flex; 
        flex-wrap: wrap; 
        justify-content: space-between; 
        width: 1400px;
        margin: 0 85px;

    }

    .gallery-item {
        flex: 1 1 calc(33.333% - 10px); 
        margin-bottom: 10px; 

    }

    .gallery-image {
        height: auto; 
        border-radius: 5px; 
}

</style>
