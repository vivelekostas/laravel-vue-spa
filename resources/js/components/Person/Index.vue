<template lang="">
    <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Job</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in people">
              <th scope="row">{{person.id}}</th>
              <td>
                <router-link :to="{ name: 'person.show', params: { id: person.id } }">{{person.name}}</router-link>
              </td>
              <td>{{person.age}}</td>
              <td>{{person.job}}</td>
              <td>
                <router-link :to="{ name: 'person.edit', params: { id: person.id } }" class="btn btn-outline-success">Edit</router-link>
              </td>
              <td>
                <a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-outline-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Index",

    data() {
        return {
            people: null
        }
    },

    // событие загрузки страницы, которое
    // автоматически вызовет методы указанные в нем.
    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get('api/person')
                .then(res => {
                    this.people = res.data.data
                })
        },

        deletePerson(id) {
            axios.delete(`/api/person/${id}`)
            .then(res => {
                this.getPeople()
            })
        }
    },
}
</script>
<style lang="">

</style>