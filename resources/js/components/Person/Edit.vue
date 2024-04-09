<template lang="">
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="job" placeholder="Job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="update" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Edit",

    // инициализация ключей для формы, для подставления и сохранения данных.
    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    // событие загрузки страницы, которое
    // автоматически вызовет методы указанные в нем.
    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            // axios.get('/api/person/' + this.$route.params.id) // не модная передача параметра
            axios.get(`/api/person/${this.$route.params.id}`)    // модная!
                .then(res => {
                    this.name = res.data.data.name
                    this.age = res.data.data.age
                    this.job = res.data.data.job
                })
        },

        update() {
            axios.patch(`/api/person/${this.$route.params.id}`, {
                name: this.name,
                age: this.age,
                job: this.job,
            })
                .then(res => {
                    this.$router.push({
                        name: 'person.show',
                        params: { id: this.$route.params.id }
                    })
                })
        }
    },

    computed: {
        // метод проверяющий заполнили ли поля формы данными - это
        // пример такой простейшей валидации.
        isDisabled() {
            return this.name && this.age && this.job
        }
    }
}
</script>
<style lang="">

</style>