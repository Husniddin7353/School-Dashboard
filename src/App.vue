<template>
  <div id="app">
    <header class="header">
        <div class="container  d-flex align-items-center justify-content-between">
          <router-link to="/" class="logo">Dashboard</router-link> 
        <div class="nav d-flex align-items-center justify-content-between">
          <router-link class="nav-link home" to="/">Home</router-link> 
          <router-link class="nav-link" to="/employees">Students</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </div>
        </div>
    </header>
    <router-view class="container"/>

    <footer class="footer">
      <p>
        HR Management System
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name:'App',

  
}
</script>

<style lang="scss">
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 .btn:focus{
   box-shadow: none;
 }
 .container{
   max-width: 1190px;
   margin: 0 auto;
   padding: 0 !important;
 }
  #app{
    

    .header{
      padding: 16px 0;
      background: #283044;
      .logo{
        text-decoration: none;
        font-size: 30px;
        font-weight: 700;
        color: #fff;
      }

      .nav{
        &-link{
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
          color: #fff;

          &:focus{
            color: #b6c5f1 ;
          }

          &:hover{
            color: #cdd6f0;
            transition: all 0.2s;
          }
        }
      }
    }

    .footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      background: #283044;

      p{
        color: white;
        padding-top:8px ;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
</style>
