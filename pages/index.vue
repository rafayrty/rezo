<template>
    <div class="index-page">
<AnimationBG/>
  <div class="main-container"  id="js-scroll">
    <div class="container">

      <Header />


<h1 data-scroll><span>Rezo Zero is a creative</span> <span>agency that builds</span> <span>powerful digital</span> <span>solutions.</span></h1>

    </div>

    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data(){
    return{
      lms:null
    }
  },
      transition:{
         mode: 'in-out',

leave:function(el,done){
  let containers = document.querySelectorAll('.main-container');
  console.log(containers);

  let leaveContainer = containers[0];
    let enterContainer = containers[1];

  let leavePage = leaveContainer.getBoundingClientRect();
    let enterPage = enterContainer.getBoundingClientRect();
gsap.set(enterContainer,{delay:.1,zIndex:10});
  let tl = gsap.timeline();
  tl.set('.animation-bg',{display:'block'});
   tl.to('.animation-bg',{autoAlpha:0.9,duration:1,ease:"expo.easeIn"});
   tl.to(leaveContainer,{duration:.5,translateY:'-60%',ease:"expo.easeout"})
tl.to(enterContainer,{duration:.5,translateY:leavePage.y - enterPage.y,ease:"power4.easeIn"},'-=.5').add(()=>{
done();
   gsap.set('.animation-bg',{display:'none',opacity:0});
   gsap.set(leaveContainer,{translateY:0});
      gsap.set(enterContainer,{translateY:0,zIndex:0});
});

  //   leave: function (el,done) {
  //   gsap.set('.animation-bg',{display:'block'});
  // gsap.to('.animation-bg',{autoAlpha:0.9,duration:.5,ease:"expo.easeOut"});
  //   gsap.to('.index-page .container',{duration:.5,translateY:'-50%'});


  // setTimeout(() => {
  //     done();

  // }, 50000);

}
  // },
    }, 
  mounted(){

  this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true
  });

    // gsap.from('h1',{delay:.5,duration:.5,translateY:"40%", autoAlpha:0,ease:"expo.easeInOut"})
    gsap.from('h1 span',{stagger:0.2,delay:.5,duration:.5,translateY:"40%",skewX:10, autoAlpha:0,ease:"expo.easeInOut"})
  },
    beforeDestroy(){
    this.lmS.destroy()
  }
}
</script>
<style>
.main-container{
  background:#fff;
  position:relative;
}
html{
  overflow:hidden;
}
/* .zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
} */

</style>
<style scoped>

/* Enter and leave animations can use different */
/* durations and timing functions.              */
/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
} */
.container {
  padding:2rem 0rem;
  max-width:70%;
  margin: 0 auto;
  height: 100vh;

}
h1{
  margin-top:15%;
  font-size:7rem;
  line-height:1;
}
h1 span{
  display:inline-block;
}


</style>
