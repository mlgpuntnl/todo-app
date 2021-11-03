<template>
  <div class="home">
    <h1>Miene vue app</h1>
    <div class="container">
      <todo-list />
      <add-to-list />
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddToList from '@/components/AddToList.vue'

export default {
  name: 'Home',
  components: {
    TodoList,
    AddToList
  }
}
</script>

<style>
  .home{
    padding: 1.5rem;
  }
  h1{
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1020px;
    width: 100%;
    margin: auto;
  }
</style>
