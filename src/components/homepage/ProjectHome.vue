<template>
    <div id="app" class="app">
      <div class="title">
        <h1 class="new-pro">Следите за нашими проектами</h1>
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
          <div class="caption">
            <h3 class="image-title">Современная кухня</h3>
            <p class="image-description">Декор / Планировка</p> 
            <botton class="botton" @click="handleButtonClick(image)">
                <img src="~@/assets/Btn.png" alt="Кнопка" />
            </botton>
        </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        images: [
          'Kit_1.png',
          'Kit_2.png',
          'Kit_3.png',
          'Kit_4.png',
        ],
        text: 'Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы'
      };
    },
    methods: {
      handleButtonClick(image) {
        alert(`Вы выбрали ${image}`);
      },
    },
  };
  </script>

<style scoped>
    
    .title {
        text-align: center;
        margin: 300px 0 90px 120px;

    }

    .new-pro {
        font-size: 50px;
        color: #292f36
    }

    .new-pro-text {
        font-size: 20px;
        margin: 0px 100px 20px 390px;
        width: 520px;

    }

    .new-pro, .new-pro-text {
        font-family: 'DM Serif Display', Helvetica, sans-serif;
        color: #4d5053
    }
    
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        padding: 9px 13px 13px 13px;
        width: 1500px;
        gap: 125px;

    }
    
    .gallery-image {
        width: 90%;
        margin-bottom: 10px;
    }

    .app {
        width: 1450px;
    }
</style>
