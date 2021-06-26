<template>
<header>
<h2><nuxt-link  to="/">Digital Creative Agency</nuxt-link></h2>

<ul class="menu">

<li><nuxt-link to="/projects">Projects</nuxt-link></li>
<li><a href="#">The Agency</a></li>
<li><a href="#">Contact</a></li>

</ul>

</header>

</template>

<style lang="scss" scoped>
a{
text-decoration:none;
color:inherit;
}

.menu{
  display:flex;
  justify-content:space-around;
  margin:0;
  padding:0;
  list-style:none;
}
.menu li:not(:first-child){
  margin-left:3rem;
}
.menu li a{
  text-decoration: none;
  color:#000;
  font-weight:500;
  font-size:1.2rem;
}

header{
  display:flex;
  justify-content: space-between;
}
header h2{
  flex-basis:60%;
}




</style>