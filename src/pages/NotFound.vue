<template>
    <div class="not-found">
      <div class="content">
        <h1 class="error-code">404</h1>
        <p class="error-message">Приносим извинения, но страница, которую вы искали, не найдена.</p>
        <router-link to="/" class="button">Домой <span><img src="../assets/Vector.png" alt="img"></span></router-link>
      </div>
      <div class="image-container">
        <img src="@/assets/404.png" alt="Старая комната" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color: #f9f9f9;
  }
  .content {
    flex: 1;
    padding: 20px;
    text-align: left;
  }
  .error-code {
    font-size: 80px;
    color: #a1673c;
  }
  .error-message {
    font-size: 20px;
    margin: 10px 0;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  .button:hover {
    background-color: #444;
  }
  .image-container {
    flex: 1;
    overflow: hidden;
    border-radius: 50% 0 0 50%;
  }
  .image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  </style>

