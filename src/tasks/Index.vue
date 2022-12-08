<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-6"></h1>
    </header>
    <div class="row">
      <div class="col-lg-6 col-md-6 mb-12">
        <h3> Current Tasks</h3>
      </div>
      <div class="col-lg-6 col-md-6 mb-12 move-right ">
        <a href="/tasks/new" type="button" class="create-button btn btn-primary">New</a>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 mb-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th> Description </th>
              <th> Priority </th>
              <th> Actions </th>
            </tr>
          </thead>
          <draggable filter=".delete" :onFilter="handlefilter" v-model="tasks" tag="tbody" item-key="id"
            @end="callEndpoint">
            <template #item="{ element, index }">
              <tr class="draggable">
                <td>{{ element.description }}</td>
                <th>{{ index + 1 }}</th>
                <td>
                  <div class='data-buttons'>
                    <a :href="'/tasks/' + element.id + '/edit'" class="mr-5">
                      <font-awesome-icon icon="fa-solid fa-pencil" />
                    </a>
                    <a class="delete" href="#" @click.stop="delete (id)">
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                  </div>
                </td>
              </tr>
            </template>
          </draggable>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    callEndpoint: async function (e) {
      const position = e.newIndex;
      const taskId = this.tasks[position].id

      window.console.log(taskId, position + 1)
      const payload = {
        id: taskId,
        position: position + 1,
      }
      await this.axios.patch('http://localhost:3000/tasks/reorder', payload)
    },
    handlefilter: async function (e) {
      if (e.target.className == 'delete') {
        const task = this.tasks[e.oldIndex]
        await this.axios.delete(`http://localhost:3000/tasks/${task.id}`)

        await this.axios.get('http://localhost:3000/tasks').then((response) => {
          this.tasks = response.data
        });
      }
    },
  },
  async created() {
    await this.axios.get('http://localhost:3000/tasks').then((response) => {
      this.tasks = response.data
    });
  }
}

</script>

<style>
.mr-5 {
  margin-right: 5px;
}

.draggable {
  cursor: grab;
}

.move-right {
  display: flex;
  justify-content: end;
}

.create-button {
  padding: 10px 25px !important;
}
</style>