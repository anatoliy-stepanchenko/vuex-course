<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">User List</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          sapiente impedit magni accusantium aspernatur labore beatae dolorem
          maiores commodi, repellat accusamus officia veritatis incidunt,
          ducimus deserunt ipsam animi. Esse, eius.
        </p>
      </div>
    </div>
  </div>

  <div v-if="loading" class="container">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading && errorMessage">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
    </div>
  </div>

  <div v-if="!loading && users.length > 0" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Spinner from "./Spinner.vue"
export default {
  components: { Spinner },
  data() {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    }
  },
  created: async function () {
    try {
      this.loading = true
      const dataURL = "https://jsonplaceholder.typicode.com/users"
      const response = await axios.get(dataURL)
      this.users = response.data
      this.loading = false
    } catch (error) {
      this.loading = false
      this.errorMessage = error
    }
  },
}
</script>

<style></style>
