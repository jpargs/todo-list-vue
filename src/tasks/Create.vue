<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-6"></h1>
    </header>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 mb-12">
        <h2> New Task</h2>
      </div>
    </div>
    <form>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Description/Title</label>
        <div class="col-sm-10">
          <textarea v-model="description" class="form-control" />
        </div>
      </div>
    </form>
    <button class="btn btn-primary" @click="submit">Submit</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      description: ''
    }
  },
  methods: {
    submit: async function (e) {
      const payload = {
        task: {
          description: this.description
        }
      }
      await this.axios.post('http://localhost:3000/tasks', payload).then((response) => {
        this.$router.push(`/tasks`).catch(() => {})
      });
    }
  }
}
</script>
