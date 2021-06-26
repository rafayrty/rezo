<template>
  <div class="projects-page">
    <div class="container">
      <Header />







    </div>
    <div class="projects-grid">
<div class="column">
        <h1>R</h1>
        <div class="info">
            <b></b>
            <p> <span class="year">2020</span>
                <span class="name">ExpodCast</span>
            </p>
        </div>

          <img src="~/assets/images/cmbv_Poster.webp" />
</div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted(){
    gsap.from('h1',{delay:.5,duration:.5,translateY:"40%", autoAlpha:0,ease:"expo.easeInOut"})
  }
}
</script>

<style scoped>
.projects-page{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
  background: #fff;
}
.projects-grid{
    display:grid;
    grid-template-rows:auto;
      margin-top:15%;
}
.projects-grid .column{
    display:grid;
    grid-template-columns:1fr .35fr 1fr;
}
.column img{
    align-self:end;
    margin-top:15%;
}
.column h1{
    margin-left:30%;

}
.column .info{
    justify-self:center;
}
.column .info p{
    margin:1rem 0rem;
}
.column b{
    margin:0 auto;
    display:block;
    height:50%;
    background:#D1D1D1;
    width:.05rem;
}
.column .year{
    display:block;
    font-weight:500;
    text-align:center;
}
.column .name{
    font-size:2.7rem;
    position:relative;
    left:38%;

}


img{
    width:100%;
}
.container {
  padding:2rem 0rem;
  max-width:70%;
  margin: 0 auto;

}
h1{
  font-size:8rem;
  line-height:1;
}
h1 span{
  display:inline-block;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;

}


</style>
