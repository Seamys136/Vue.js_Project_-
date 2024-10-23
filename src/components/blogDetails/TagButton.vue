<template>
    <button class="tag-button" @click="emitTag">{{ tag }}</button>
  </template>
  
  <script>
  export default {
    props: {
      tag: String
    },
    methods: {
      emitTag() {
        this.$emit('tag-selected', this.tag);
      }
    }
  }
  </script>
  
  <style scoped>
  .tag-button {
    margin: 5px;
  }
  </style>