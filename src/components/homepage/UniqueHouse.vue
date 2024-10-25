<template>
    <div class="banner">
        <img class="banner-image" :src="imageUrl" :alt="altText">
        <div class="banner-text">
            <h1 class="title">Пусть ваш дом будет уникальным</h1>
            <p class="title-text">Существует много вариаций Lorem Ipsum, которые можно использовать</p>
            <button class="button" @click="handleClick">Начать <span><img src="../../assets/Vector.png" alt="img"></span></button>
        </div>
    </div>
</template>
.
<script>

export default {
  name: 'UniqueHouse',
  props: 
    {
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'img'
    },
    logoName: {
    type: String,
    required: true
    },
  }
}
</script>

<style scoped>
    .banner {
        width: 930px;
        height: 550px;
        margin-top: 20px;
        padding: 20px 120px 0px 180px;
    }

    .banner-image {
        width: 1180px;
        height: 758px;
       
    }

    .banner-text {
        position: relative;
        bottom: 580px;
        left: 50px;
    }

    .title {
        font-size: 55px;
        width: 520px;
    }

    .title-text {
        font-size: 22px;
        line-height: 40px;
        width: 520px;
    }

    .title, .title-text {
        font-family: 'DM Serif Display', Helvetica, sans-serif;

    }
    
    .button {
        font-family: 'DM Serif Display', Helvetica, sans-serif;
        font-size: 18px;
        background-color: #292f36;
        border-radius: 18px;
        color: #fff;
        padding: 20px;
        position: relative;
        bottom: 10px;
        left: 0px;
    }
    

</style>
