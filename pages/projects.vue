<template>
  <div class="projects-page" >
    <AnimationBG/>
<div class="main-container" id="js-scroll">

    <div class="container">
      <Header />









    </div>
     <div class="content__inner">
    <div class="timeline" data-scroll-section>
      <!--timeline bar-->
      <div class="timeline__bar"></div>
      <!--timeline element-->
      <div class="timeline__elem timeline__elem--left">
        <!--timeline element date-->
        <div class="timeline__date"><span class="timeline__date-day">2020</span><span style="text-align:right;" class="timeline__date-month">Expodcast</span></div>
        <!--timeline event-->
        <div class="timeline__event">
         
                <h1 style="margin-left:30%;">R</h1>
                <div class="image">
                    <img data-scroll data-scroll-speed="2" data-scroll-direction="vertical" src="~/assets/images/cmbv_Poster.webp" />

                </div>


        </div>
      </div>

      <!--timeline element-->
      <div class="timeline__elem timeline__elem--left">
        <!--timeline element date-->
        <div class="timeline__date"><span class="timeline__date-day">2021</span><span style="text-align:left;" class="timeline__date-month">Les éclaireurs</span></div>
        <!--timeline event-->
        <div class="timeline__event">
                    <img data-scroll data-scroll-speed="2" data-scroll-direction="vertical" src="~/assets/images/Leseclaireurs_Poster.webp" />
    <h1>&nbsp;</h1>

        </div>
      </div>
 
    </div>
  </div>
  </div>

    <!-- <div class="projects-grid">
<div class="column">
    <div class="right">
        <h1>R</h1>
   <img class="image-2" src="~/assets/images/Leseclaireurs_Poster.jpg.webp" />


    </div>
    <div class="info">
        <div class="first">
            <div class="inner-info">
           <b></b>
            <p> <span class="year">2020</span>
                <span class="name">ExpodCast</span>
            </p>
            </div>
        </div>
                <div class="continued">
           <b></b>
            <p> <span class="year">2021</span>
                <span class="name">Les-Eclaireurs</span>
            </p>
        </div>


    </div>
        <div class="left">
                  <img src="~/assets/images/cmbv_Poster.webp" />

        </div>

</div>
    </div> -->
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
    return {
      lmS: null
    };
  },
    transition:{
         mode: 'in-out',

leave:function(el,done){
  let containers = document.querySelectorAll('.main-container');

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

},



    }, 

  mounted(){
setTimeout(()=>{
  this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true
  });
},2000)
  //     this.lmS.update()


    // gsap.from('h1',{delay:.5,duration:.5,translateY:"40%", autoAlpha:0,ease:"expo.easeInOut"})
  },
  beforeDestroy(){
    this.lmS.destroy()
  }
}
</script>

<style lang="scss" scoped>
.image{
  height:100%;
  overflow:hidden;
}
.image img{
  height:120%;
  object-fit: cover;
  
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }
// .slide-up-enter-active,
// .slide-up-leave-active,
// .slide-up-enter-active,
// .slide-up-leave-active {
//   transition-duration: 0.5s;
//   transition-property: height, transform;
//   transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
//   overflow: hidden;
// }

// .slide-up-enter,
// .slide-up-leave-active {
//   transform: translate(0, 100%);
// }
// // .slide-up-enter-active {
// //   transition-delay: 3s;
// // }
// .slide-up-leave-active,
// .slide-up-enter {
//   transform: translate(0, 100%);
// }
//mixins
@mixin transition-mix ($property: all, $duration: 0.2s, $timing: linear, $delay: 0s) {
  transition-property: $property;
  transition-duration: $duration;
  transition-timing-function: $timing;
  transition-delay: $delay;
}

@mixin position-absolute ($top: null, $left: null, $right: null, $bottom: null) {
  position: absolute;
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
}

//variables
$theme-font-color: #2c2c2c;







//content styles
.content {
  max-width: 800px;
  width: 95%;
  margin: 0 auto 40px;
}

.content__title {
  margin-bottom: 40px;
  
  font: {
    size: 18px;
    weight: 600;
  }
  text-align: center;
}

//timeline styles
$tablet-width: 900px;
$mobile-width: 560px;

$timeline-bar-bg-start: #ffce79;
$timeline-bar-bg-end: #9b74ff;
$timeline-bar-width: 1.5px;

.timeline {
  position: relative;
  
  min-height: 500px;
  width: 100%;
  padding: 60px 0;
}
.timeline__date-month{
    display:block;
  &:after {
    @include position-absolute($left: 50%);
    
    display: block;
    width: $timeline-bar-width + 6;
    height: $timeline-bar-width + 6;
    
    content: '';
    
    transform: translateX(-50%);
    
    border-radius: 50%;
        bottom: -12%;
    
    background-color: #000;
  }
  
}
.timeline__bar {
  @include position-absolute($top: 0, $left: 50%);
  
  width: $timeline-bar-width;
  height: 100%;
  
  transform: translateX(-50%);
  
  background: #DADADA;
  
  //decorations


  &:after {
    bottom: -1px;
    
    background-color: $timeline-bar-bg-end;
  }
}

.timeline__elem {
  position: relative;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: $tablet-width) {
    flex-direction: row;
  }
}

.timeline__elem--right {
  
   @media (min-width: $tablet-width) {
    justify-content: flex-end;
  }
}

$timeline-date-dimensions: 70px;

.timeline__date { 
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: $timeline-date-dimensions;
  margin: auto;
  background:#fff;
  color: #000;
  
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 6px solid #fff;
  
  @media (min-width: $tablet-width) {
     @include position-absolute($top: 50%, $left: 50%);
    
    transform: translate(-50%, -50%);
  }
    padding:1rem 0;

}

.timeline__date-day {
  font: {
    size: 1.35rem;
    weight: 600;
  }
}

.timeline__date-month {
  width:20rem;
  line-height:1;
  font: {
    size: 2.85rem;
  }
}

$timeline-event-decor-dimensions: 8px;

.timeline__event {
  position: relative;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:10rem;
  z-index:-1;

  width: 100%;
  margin: 30px auto 0;

  
  @media (min-width: $mobile-width) {
    // width: 65%;
  }

  @media (min-width: $tablet-width) {
      // width: calc((100% - #{$timeline-date-dimensions} - #{$timeline-event-decor-dimensions} * 4) / 2);
     margin: 0;
  }

  //triangle decoration
  &:before {
    @include position-absolute($top: 50%);
    
    display: none;
    width: 0;
    height: 0;
    
    content: '';
    
    transform: translateY(-50%);
    
    border-top: $timeline-event-decor-dimensions solid transparent;
    border-bottom: $timeline-event-decor-dimensions solid transparent;
  }

  //decoration boxshadow
  &:after {
    @include position-absolute($top: 50%);
    
    display: none;
    width: ($timeline-event-decor-dimensions * 2);
    height: ($timeline-event-decor-dimensions * 2);;
    
    content: '';
    
    transform: translateY(-50%) rotate(45deg);
  }

  @media (min-width: $tablet-width) {

    &:before,
    &:after {
      display: block;
    }
  }
}





$timeline-padding-horz: 15px;
$timeline-padding-vert: 20px;

.timeline__event-date-time {
  padding: $timeline-padding-vert $timeline-padding-horz 0;
  
  display: flex;
  margin-bottom: 15px;
  
  font: {
    size: .8rem;
  }
  color: rgba($theme-font-color, .7);
}

.timeline__event-date {
  margin-right: 10px;
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
.image-2{
    margin-top:10%;
}
.column img{
    align-self:end;
}
.column h1{
    margin-left:30%;

}
.column .info{
    height:100%;
    justify-self:center;
    align-self:end;
}
.column .info .first{
height:30%;
}
.column .info .continued{
    height:100%;
}
.column .info p{
    margin:1rem 0rem;
}
.column b{
    margin:0 auto;
    display:block;
    height:30%;
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
