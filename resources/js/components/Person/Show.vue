<template lang="">
    <!-- vif оч важная функция, он отобразит данные только
      после того, как в person подгрузятся данные из getPerson-->
    <div v-if="person">
        <div>
            Name: {{this.person.name}}
        </div>
        <div>
            Age: {{this.person.age}}
        </div>
        <div>
            Job: {{this.person.job}}
        </div>
        <router-link :to="{ name: 'person.edit', params: { id: this.person.id } }">Edit</router-link>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Show",

    data() {
        return {
            person: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/person/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data.data
                })
        },
    }
}
</script>
<style lang="">

</style>