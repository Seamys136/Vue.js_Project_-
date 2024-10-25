<template>
  <div>
    <div class="tags-container">
      <div class="tags">
        <p class="title">Теги</p>
        <button
          v-for="tag in tags"
          :key="tag"
          :class="['tag-button', { active: selectedTag === tag }]"
          @click="selectTag(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <div class="article-detail" v-if="selectedArticle">
        <h2>{{ selectedArticle.title }}</h2>
        <p>{{ selectedArticle.content }}</p>
      </div>

      <div class="articles">
        <h3>Остальные статьи:</h3>
        <div v-for="article in filteredArticles" :key="article.id" class="article">
          <h4 @click="selectArticle(article)">{{ article.title }}</h4>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
      articles: [
        { id: 1, title: 'Статья о кухне', content: 'Детальное описание кухни.', tag: 'Кухня' },
        { id: 2, title: 'Статья о спальнях', content: 'Детальное описание спальни.', tag: 'Спальня' },
        { id: 3, title: 'Статья о зданиях', content: 'Детальное описание зданий.', tag: 'Здание' },
        { id: 4, title: 'Статья об архитектуре', content: 'Детальное описание архитектуры.', tag: 'Архитектура' },
        { id: 5, title: 'Статья о планировке', content: 'Детальное описание планировки.', tag: 'Планировка' },
      ],
      selectedTag: null,
      selectedArticle: null,
    };
  },
  computed: {
    filteredArticles() {
      return this.selectedTag
        ? this.articles.filter(article => article.tag === this.selectedTag)
        : this.articles;
    },
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
      this.selectedArticle = null;
    },
    selectArticle(article) {
      this.selectedArticle = article;
    },
  },
};
</script>

<style scoped>
.tags {
  margin-bottom: 20px;
  margin-bottom: 20px;
  left: 850px;
  position: absolute;
  position: relative;
    bottom: 1500px;
    width: 200px;
}

.tag-button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
.tag-button.active {
  background-color: #333;
  color: white;
}
.article {
  cursor: pointer;
}
</style>