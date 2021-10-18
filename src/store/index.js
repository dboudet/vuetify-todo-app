import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newTask: {
      title: "",
      dueDate: "",
    },
    tasks: [
      {
        id: 1,
        title: "mow lawn",
        due: "Monday",
        completed: false,
      },
      {
        id: 2,
        title: "groceries",
        due: "Tuesday",
        completed: false,
      },
      {
        id: 3,
        title: "call pool guy",
        due: "ASAP",
        completed: false,
      },
      {
        id: 4,
        title: "take out garbage",
        due: "Tuesday",
        completed: false,
      },
    ],
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask)
      state.newTask = {}
    },
    completeTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0]
      task.completed = !task.completed
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id)
    },
  },
  actions: {
    addTask({ commit }, newTask) {
      let newTaskFull = {
        id: Date.now(),
        title: newTask.title,
        due: newTask.dueDate,
        completed: false,
      }
      commit("addTask", newTaskFull)
    },
    completeTask({ state, commit }, id) {
      commit("completeTask", id)
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id)
    },
  },
  getters: {},
  modules: {},
})
