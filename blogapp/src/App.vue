<template>

    <Navbar/>
  <router-view/>
</template>


<script>
import Navbar from './components/Navbar';
export default{
  components:{
    Navbar
  }

}

</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');

body {
    
  max-width: 1200px;
  margin:20px auto;
  padding:0 20px;
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #eed5d2;

}

p,h1,h2,h3,a,ul{
  margin:0;
  padding:0;
  text-decoration:none;
  color: # 8b7d7b;
  
}

h2{
  margin-bottom:40px;
}

h3{
  text-transform:capitalize;
  margin-top:8px;
}


</style>
