<template>
  <div class="banner">
    <img class="banner-image" :src="imageUrl" :alt="altText">
    <h1 class="title">Создадим лучший макет перепланировки</h1>
    <img class="banner-one" :src="imageUrlOne" :alt="altText">
    <div class="signature">
      <p class="date">26 Декабрь, 2022</p>
      <ul class="container">
        <a class="link" href="#" v-for="(task, index) in tasks" :key="task.id">
          {{ task.name }}<span v-if="index < tasks.length - 1"> / </span>
        </a>
      </ul>
    </div>
      <p class="text">{{ textOne }}</p>
      <img class="banner-two" :src="imageUrlTwo" :alt="altText">
      <h1 class="title">Design sprints are great</h1>
      <p class="text">{{ textTwo }}</p>    
  </div>
</template>

<script>
export default {

  data() {
      return {
        tasks: [
          { id: 1, name: 'Интерьер' },
          { id: 2, name: 'Домой' },
          { id: 3, name: 'Декор' },
        ],
      };
    },

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

<style scoped>

.link {
    text-decoration: none;  
    color: inherit;        
}

.link:hover {
    text-decoration: none; 
    color: inherit;           
}

.signature {
  display: flex; 
  align-items: center; 
}

.date {
  margin-right: 450px; 
}

.container {
  list-style-type: none;
  padding: 0; 
  display: flex; 
}

.link li {
  margin-right: 10px;
}

.link li:last-child {
  margin-right: 0;
}
</style>