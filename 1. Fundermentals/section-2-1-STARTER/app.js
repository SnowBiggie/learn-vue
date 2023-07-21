const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John', 
            middleName: "",
            lastName: "Doe", 
            url: "https://Google.com", 
            raw_url: '<a href="https://Google.com" target="_blank">Google2</a>', 
            age: 20
        }
    },
    methods: {
        increment (){
            this.age++;
        },

        UpdateLastName(msg, event){
            console.log(msg);
            this.lastName = event.target.value;
        },

        updateMiddleName(event){
            this.middleName = event.target.value;
        }
    },
    computed: {
        fullName(){
            console.log("Full name computed  method called.")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    }, 
    watch: {
        age(newVal, oldVal){
           setTimeout(()=>{
                this.age = 20;
           }, 3000) 
        }
    }
}).mount('#app');

// setTimeout(()=>{
//     vm.firstName = "Bob"
// }, 2000)

