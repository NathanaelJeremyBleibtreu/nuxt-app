<template>
  <main 
        class="
        w-screen h-screen
        flex flex-col items-center justify-center
        "
    >
    <slot />
  </main>
</template>

<script setup>
const title = ref('My App')
const description = ref('My App Description')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }]
  ,
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.bunny.net'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.bunny.net/css?family=amatic-sc:700'
        },
    ]
})
</script>
