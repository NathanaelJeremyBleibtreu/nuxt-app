<template>
    <main 
        class="
        w-screen h-screen
        flex flex-col items-center justify-center
        "
    >
        <h1 class="font-header text-2xl">Testament</h1>
        <button @click="inc">{{ count }} clicks</button>
    </main>
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