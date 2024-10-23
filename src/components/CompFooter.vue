<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-wrapper">
                <div class="footer-info">
                    <div class="contact-info">
                        <img class="logo" :src="imageUrl" :alt="altText">{{ logoName }}
                    </div>    
                </div>
                <div class="wrapper">   
                    <div>
                        <img class="logo-footer" alt="twitter" src="../assets/tw.png">
                    </div>
                    <div>
                        <img class="logo-footer" alt="in" src="../assets/in.png">
                    </div>
                </div>
            </div>   
        <div> 
        <div class="content">
            <div>
            <ul class="list">Страницы
                <p class="menu-list-link">
                    <a class="link" href="#">Домой</a>
                </p>
                <p class="menu-list-link">
                    <a class="link" href="#">Проект</a>
                </p>
                <p class="menu-list-link">
                    <a class="link" href="#">Блог</a>
                </p>
            </ul>
            </div>
            <div>
                <ul class="list">Контакты
                    <p class="contact" >55 East Birchwood Ave. <br>Brooklyn, New York 11201</p>
                    <p class="contact">contact@interno.com</p>
                    <p class="contact">(123) 456 - 7890</p>
                </ul>
            </div>
        </div>
    </div>
</div>

    </footer>
</template>
  
  <script>
  export default {
    name: 'CompFooter',
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
    logoName: {
    type: String,
    required: true
    },
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
    .footer {
        padding: 20px 120px 0px 180px;
    }

    .footer-content {
        margin-top: 250px;
        display: flex;
        justify-content: space-between
    }

    .content, .contact-info, .wrapper {
        display: flex;
        font-size: 40px;
        line-height: 30px;
        align-items: baseline;
    }

    .logo-footer {
        margin: 30px 35px 0 0;
    }

    .list {
        margin: 0;
        font-family: 'Akrobat', Helvetica, sans-serif;
        font-size: 25px;
        padding-right: 10px
    }

    .link, .contact {
        color: #4d5053; 
        font-family: 'Akrobat', Helvetica, sans-serif;
        text-decoration: none;
        margin-top: 40px;
        line-height: 30px;
        font-size: 22px;
    }
    
    .logo {
        width: 30px;
    }
    
</style>
  