<template>
  <div class="text-container">
    <h1 class="title">Design sprints are great</h1>
    <p class="text">{{ textTwo }}</p>    
    <ol class="no-bullets">
      <li class="paragraph">
        <span class="number">1 </span>{{ paragraph }}
      </li>
      <li class="paragraph">
        <span class="number">2 </span>{{ paragraph }}
      </li>
      <li class="paragraph">
        <span class="number">3 </span>{{ paragraph }}
      </li>
    </ol>
    <img class="banner-three" :src="imageUrlThree" :alt="altText">
    <p class="text">{{ textThree }}</p> 
  </div>
</template>

<script>
export default {
  props: {
    textTwo: {
      type: String,
      required: true
    },
    textThree: {
      type: String,
      required: true
    },
    imageUrlThree: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      paragraph: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
    };
  }
};
</script>
  <style scoped>
.no-bullets {
  list-style-type: none; /* Убираем маркеры списка */
  padding: 0; /* Убираем отступы по умолчанию */
  margin: 0; /* Убираем внешние отступы */
}

  </style>