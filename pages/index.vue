<template>
    <Loader></Loader>
    <div class="flex flex-col">
        <h1 class="font-header text-2xl">Testament</h1>
        <NuxtLink class="navbar-item-link" to="/map">Map</NuxtLink>
    </div>
</template>

<script>
console.log('hellooo')
</script>


<script setup>

const count = ref(0)
const inc = ()=>{
    count.value++
}

</script>