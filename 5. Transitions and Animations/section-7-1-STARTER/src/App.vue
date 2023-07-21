<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else key="secondary">Another hello!</h2>
  </transition>

  <Transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Hello</h2>
  </Transition>

  <Transition 
  @before-enter="boforeEnter"
  @enter="Enter"
  @after-enter="afterEnter"
  @before-leave="beforeLeave"
  @leave="Leave"
  @after-leave="afterLeave"
  :css="false"
  >
    <h2 v-if="flag">Hey</h2>
  </Transition>
  
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      flag: true,
    }
  },
  methods: {
    boforeEnter(element){
      console.log("before-enter is fired", element)
    },

    Enter(element, done){
      const animation = element.animate([{
        transform: scale3d(0, 0, 0)
      }, {}], {
        duration: 1000,

      });
      animation.onFinish = () =>{
        done();
      }
      
    },

    afterEnter(element){
        console.log("after-enter is fired", element)
    },

    beforeLeave(element){
      console.log("before-leave is fired", element)
    },

    Leave(element, done){
      // const animation = element.animate([{}, {transform: scale3d(0, 0, 0)
      // }], {
      //   duration: 1000,

      // });
      // animation.onFinish = () =>{
      //   done();
      // }
    },

    afterLeave(element){
      console.log("after-leave is fired", element)
    }
  }
}
</script>

<style> 
.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: all 1s linear;
}

.fade-leave-to{
  transition: all 1s linear;
  opacity: 0;
}

h2{
  width: 400px;
  padding: 20px;
  margin: 20px ;
}

.zoom-enter-active{
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active{
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from{
  opacity: 0;
}

.zoom-leave-to{
  opacity: 0;
}

@keyframes zoom-in{
  from{
    transform: scale(0, 0);
  }
  to{
    transform: scale(1,1);
  }
}

@keyframes zoom-out{
  from{
    transform: scale(1,1);
  }
  to{
    transform: scale(0, 0);
  }
}
</style>
