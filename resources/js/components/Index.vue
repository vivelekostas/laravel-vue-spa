<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'person.index' }" class="nav-link"
                                aria-current="page">People</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'person.create' }" class="nav-link"
                                aria-current="page">Create</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link" aria-current="page">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="mt-3">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "Index"
}
</script>
<style lang="">

</style>