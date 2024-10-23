<template>
  <div class="banner">
    <img class="banner-image" :src="imageUrl" :alt="altText">
    <h1 class="title">Создадим лучший макет перепланировки</h1>
    <img class="banner-one" :src="imageUrlOne" :alt="altText">
    <p class="text">{{ textOne }}</p>
    <img class="banner-two" :src="imageUrlTwo" :alt="altText">
    <h1 class="title">Design sprints are great</h1>
    <p class="text">{{ textTwo }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogDet',
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
    imageUrlOne: {
      type: String,
      required: true
    },
    imageUrlTwo: {
      type: String,
      required: true
    },
    textOne: {
      type: String,
      required: true
    }, 
    textTwo: {
      type: String,
      required: true
    }
  } 
};
</script>