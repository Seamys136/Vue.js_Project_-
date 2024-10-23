<template>
    <button class="tag-button" @click="handleClick">{{ tag }}</button>
  </template>
  
  <script>
  export default {
    props: {
      tag: {
        type: String,
        required: true,
      },
    },
    methods: {
      handleClick() {
        this.$emit('filter', this.tag);
      },
    },
  };
  </script>