<template>
  <div class="list">
    <ul>
      <li
        v-for="(item, index) in todoList"
        :key="index"
        @click="toggleDone(index)"
        :class="{ done: item.done}"
      >
        {{ item.msg }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TodoList',
  setup () {
    const store = useStore()

    return {
      todoList: computed(() => store.state.todoList),
      toggleDone: (id) => store.dispatch('toggleDone', id)
    }
  }
}
</script>

<style>
  .list {
    width: 500px;
  }

  .list ul {
    padding: 10px;
    border-radius: 14px;
    background: #20517c;
  }

  .list ul li {
    padding: 5px 20px;
    font-size: 20px;
    margin-bottom: 5px;
    border-radius: 7px;
    text-align: left;
    background: #fff;
    cursor: pointer;
  }

  .list ul li.done{
    text-decoration: line-through;
  }

</style>
