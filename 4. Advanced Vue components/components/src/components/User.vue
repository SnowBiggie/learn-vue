<template>
    <button type="button" @click="onclickAge">Update age</button>
    <button type="button" @click="ageChangeFn(3)">Update age function</button>
    <p> The user is {{ age }} years old</p>
</template>

<script>
    export default {
        name: 'User',
        props: {
            age: {
                type: Number,
                // required: true,
                // default: 20,
                validator(value){
                    return value < 130
                }
            },
            ageChangeFn: Function
        },
        emits: ["change-age"],
        methods: {
            onclickAge(){
                this.$emit("age-change")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>