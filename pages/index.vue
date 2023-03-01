<template>
    <h1 class="font-header text-2xl">Testament</h1>
    <button @click="inc">{{ count }} clicks</button>
    <NuxtLink to="/map">Map</NuxtLink>
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