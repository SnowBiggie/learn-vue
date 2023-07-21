

<template>

  <!-- working with props -->
  <H3>Hey</H3>
  <button type="button" @click="age++">Update age</button>
  <greeting :age="age"></greeting>
  <User :age = "age" @age-change="updateAgeHandler" :ageChangeFn="updateAgeCB"/>
  <p>{{ newAge }}</p>

  <!-- working with slots -->
  <AppForm>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="email" placeholder="email">
      <input type="text" placeholder="username"/>
      <input autocomplete=true type="password" placeholder="password"/>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>This is the default slot location</p>
  </AppForm>
  <AppForm>
    <template v-slot:help>
      <p>Contact help section</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="message"/>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>

  <!-- Working with dynamic components  -->
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <KeepAlive>
    <component :is="componentName"></component>
  </KeepAlive>
</template>





<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
import AppForm from "@/components/Form.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
  export default {
    name: "App",
    components: {
      Greeting,
      User,
      AppForm,
      Home,
      About
    },
    data(){
      return{
        age: 20,
        help: "This is a help section",
        componentName: "Home"
      }
    },
    methods: {
      updateAgeHandler(){
        this.age++;
      },
      updateAgeCB(num){
        this.age += num;
      }
    },
  }

</script>



