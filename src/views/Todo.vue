<template>
  <v-container>
    <h1>Tasks</h1>
    <v-list two-line flat>
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.dispatch('completeTask', task.id)"
          :class="{ 'green lighten-4': task.completed }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.completed"
                color="green darken-3"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{
                  'text-decoration-line-through text--disabled': task.completed,
                }"
                >{{ task.title }}</v-list-item-title
              >
              <v-list-item-title>Due: {{ task.due }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="$store.dispatch('deleteTask', task.id)">
                <v-icon color="green darken-3">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <h2 class="mt-12">Add a Task</h2>
    <v-form>
      <v-container>
        <div class="d-flex align-center">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="$store.state.newTask.title"
                label="Task"
                clearable
                @keyup.enter="$store.dispatch('addTask', $store.state.newTask)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="$store.state.newTask.dueDate"
                label="Due"
                clearable
                @keyup.enter="$store.dispatch('addTask', $store.state.newTask)"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-btn
          color="green darken-3"
          dark
          @click="$store.dispatch('addTask', $store.state.newTask)"
          >Add task</v-btn
        >
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Todo",
}
</script>
