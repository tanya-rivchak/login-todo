<script setup>
  
</script>

<template>
  <router-view/>
</template>

<style lang="scss">
:root{
  --black: #333;
  --primary: #0076C0;
  --gradient: linear-gradient(180deg, #00A9E7 0%, #005B9F 100%);
  --error: #D60000;
  --gray: #9A9A9A;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-focus-ring-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  &:focus, &:active{
    outline: none;
    outline-width: 0;
    box-shadow: none;
  }
}
body, #app{
  display: flex;
  flex-flow: column nowrap;
}
body{
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  font-family: 'Roboto', sans-serif;
}
#app {
  flex: 1;
}

.main{
  flex: 1;
}

.btn{
  text-decoration: none;
  color: var(--primary);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background .3s ease-in, color .3s ease-in;
  &:hover{
    color: var(--black)
  }
  @media screen and (min-width: 1024px){
    font-size: 20px;
    line-height: 23px;
  }
}
</style>
