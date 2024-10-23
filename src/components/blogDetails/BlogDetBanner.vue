<template>
  <div id="app">
    <div class="banner">
      <img class="banner-image" src="../../assets/Banner.png" alt="banner" />
    </div>

    <div class="container">
      <ArticleDetails :article="mainArticle"></ArticleDetails>
      <div class="tags">
        <TagButton
          v-for="tag in tags"
          :key="tag"
          :tag="tag"
          @tag-selected="filterArticles"></TagButton>
      </div>

      <ArticleDetails
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"></ArticleDetails>
      
    </div>
  </div>
</template>

<script>
import ArticleDetails from './ArticleDetails.vue';
import TagButton from './TagButton.vue';

export default {
  components: {
    ArticleDetails,
    TagButton,
  },
  data() {
    return {
      mainArticle: {
        id: 1,
        title: "Создадим лучший макет перепланировки",
        content: [
          "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum…» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль…»",
          "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль…»"
        ]
      },
      articles: [
        {
          id: 2,
          title: "Design sprints are great",
          content: [
            "В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль…»",
            "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов."
          ],
          tags: ['Архитектура', 'Планировка']
        }
      ],
      tags: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
      selectedTag: null
    };
  },
  computed: {
    filteredArticles() {
      if (!this.selectedTag) {
        return this.articles;
      }
      return this.articles.filter(article => article.tags.includes(this.selectedTag));
    }
  },
  methods: {
    filterArticles(tag) {
      this.selectedTag = tag;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
.banner {
  margin-bottom: 20px;
}
</style>