let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },

  // template: `{{ message }}`
  // beforeCreate(){
  //   console.log("beforeCreate() function called!", this.message)
  // },
  // created(){
  //   console.log("Created() function called!", this.message)
  // }, 
  // beforeMount(){
  //   console.log("beforeMount() function called!", this.$el)
  // },
  // mounted(){
  //   console.log("mounted() function called!", this.message)
  // },
  // beforeUpdate(){
  //   console.log("beforeUpdate() function called!")
  // }, updated(){
  //   console.log("updated() function called!")
  // },
  // beforeUnmount(){
  //   console.log("beforeUmount() function called!")
  // },
  // umounted(){
  //   console.log("unmounted() function called!")
  // }
});

vm.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data(){
    return {
      message: 'Hello Karabelo'
    }
  }
})

vm.mount('#app');

// let vm2 = Vue.createApp({
//   data(){
//     return {
//       message: "Hello World!",
//     }
//   },
//   render(){
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   },
//   template: `{{ message }}`
// }).mount("#app2")

// setTimeout(()=>{
//   vm.unmount();
// },10000)