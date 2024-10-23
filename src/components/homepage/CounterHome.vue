<template>
    <div class="cont">
    <div class="container">
      <div class="block" v-for="(item, index) in blocks" :key="index">
        <p class="figure">{{ item.text }}</p>
        <div class="descriptions">
          <p class="text">{{ item.description1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        { text: '12', description1: 'Лет опыта'},
        { text: '85', description1: 'Успешный проекта'},
        { text: '15', description1: 'Проектов в работе'},
        { text: '95', description1: 'Счастливых клиентов'}
      ]
    };
  }
};
</script>

<style>
.container {
    display: flex;
    padding: 0;
    margin: 0;
}

.block {
    flex: 0 0 auto;
    background-color: #f4f0ec;
    border-left: 1px solid #cda274;
    padding: 10px;
    box-sizing: border-box;
}

.cont {

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f0ec; 
    width: 1550px;
    height: 457px;
}

.figure {
    color: #cda274;
    font-size: 85px;
}

.text {
    color: #4d5053;
    font-size: 20px;
}

.figure, .text {
    font-family: 'DM Serif Display', Helvetica, sans-serif;
}
</style>