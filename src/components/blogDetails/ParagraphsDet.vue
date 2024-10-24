<template>
  <div class="text-container">
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
  </div>
</template>

<script>
export default {
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