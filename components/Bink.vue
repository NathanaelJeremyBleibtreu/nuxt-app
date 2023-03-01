<template>
    <NuxtLink 
        :to="props.route"
        class="bg-rose"
    >
        {{ props.text }}
    </NuxtLink>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
    text: String,
    route: String,
})

// const init = async () => {
//     console.log('init')
//   console.log(props.text);
// }
</script>