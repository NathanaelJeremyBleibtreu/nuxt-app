<template>
    <div>
        <h1>Cliiiiiikkkkk Mooooi</h1>
        <button @click="inc">{{ count }} clicks</button>
    </div>
</template>

<script setup>

const count = ref(0)
const inc = ()=>{
    count.value++
}

</script>