<template>
  <div class="add-to-list">
    <h2>Add to Todo list</h2>
    <input type="text" v-model="newItem">
    <button @click="addNewItem">Add</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AddToList',
  setup () {
    const store = useStore()
    const newItem = ref('')

    return {
      newItem: newItem,
      addNewItem: () => store.dispatch('createNewTodo', newItem.value)
    }
  }
}
</script>

<style>
  .add-to-list {
    display: flex;
    flex-direction: column;
    width: 500px;
    background: #20517c;
    padding: 10px;
    border-radius: 14px;
    height: fit-content;
  }
  .add-to-list h2 {
    color: #fff;
  }

  .add-to-list input {
    width: 100%;
    padding: 5px 20px;
    font-size: 20px;
    margin-bottom: 5px;
    border-radius: 7px;
    text-align: left;
    background: #fff;
    border: 2px solid #fff;
    color: #2c3e50;
    outline: none;
    margin: 10px 0;
  }
  .add-to-list input:focus {
    border: 2px solid #2c3e50;
  }

  .add-to-list button {
    width: 100%;
    padding: 5px 20px;
    font-size: 20px;
    margin-bottom: 5px;
    border-radius: 7px;
    text-align: left;
    color: #fff;
    border: 2px solid #fff;
    background: #20517c;
    text-align: center;
    width: 49%;
    cursor: pointer;
  }
  .add-to-list button:hover {
    font-weight: bold;
  }
</style>
