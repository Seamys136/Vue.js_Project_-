<template>
    <div class="tags">
      <TagButton 
        v-for="tag in tags" 
        :key="tag" 
        :tag="tag" 
        @filter="onFilter" 
      />
    </div>
  </template>
  
  <script>
  import TagButton from './TagButton.vue';
  
  export default {
    components: { TagButton },
    props: {
      tags: {
        type: Array,
        required: true,
      },
    },
    methods: {
      onFilter(tag) {
        this.$emit('filter', tag);
      },
    },
  };
  </script>