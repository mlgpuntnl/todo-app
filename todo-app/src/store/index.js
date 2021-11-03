import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: 1,
        msg: 'Dit is een todo item',
        done: 0
      },
      {
        id: 2,
        msg: 'Dit is nog een todo item',
        done: 0
      },
      {
        id: 3,
        msg: 'Dit is een todo item dat klaar is',
        done: 1
      }
    ]
  },
  mutations: {
  },
  actions: {
    // removes item from todo list
    removeListItem: (context, index) => {
      delete context.state.todoList[index]
    },
    // toggles done
    toggleDone: (context, index) => {
      const todo = context.state.todoList[index]
      todo.done = !todo.done
    },
    createNewTodo: (context, msg) => {
      // get index by conting array length before push

      // Add message to todo list
      context.state.todoList.push({ msg: msg, done: 0 })
      // send msg to backend & get id back

      // On success:
      // set id to the item with the stored index

      // On error:
      // remove todo with stored index from list --> display error
    }
  },
  modules: {
  },
  getters: {
  }
})
