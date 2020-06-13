<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <todo-item></todo-item>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/todo-item'

export default {
  name: 'Home',
  components: {
    HelloWorld, TodoItem
  }
}
</script>
