<template>
    <Renderer 
        ref="renderer" 
        resize="window"
        class="fixed top-0 left-0"
    >
        <Camera ref="camera" :position="{ z: 15 }" />
        <Scene background="white" ref="scene">
            <PointLight :position="{ y: 50, z: 20 }" />
            <Group ref="islands">
                <Box ref="island1" :size="1" :position="{ x: -5, y: 5, z: 0 }" @click="$router.push('island1')">
                    <LambertMaterial />
                </Box>
                <Box ref="island2" :size="1" :position="{ x: 5, y: 5, z: 0 }" @click="$router.push('island2')">
                    <LambertMaterial />
                </Box>
                <Box ref="island3" :size="1" :position="{ x: -5, y: 0, z: 0 }" @click="$router.push('island3')">
                    <LambertMaterial />
                </Box>
                <Box ref="island4" :size="1" :position="{ x: 5, y: 0, z: 0 }" @click="$router.push('island4')">
                    <LambertMaterial />
                </Box>
            </Group>
        </Scene>
    </Renderer>
    <div class="fixed bottom-20 left-0 w-screen flex flex-col items-center">
        <div class="flex gap-4"><label>Cam X</label><input class="w-8 border border-black" v-model="camX" /></div>
        <div class="flex gap-4"><label>Cam Y</label><input class="w-8 border border-black" v-model="camY" /></div>
        <div class="flex gap-4"><label>Cam Z</label><input class="w-8 border border-black" v-model="camZ" /></div>
        <button class="navbar-item-link" @click="moveCam()">Move Camera</button>
        <NuxtLink class="navbar-item-link" to="/">BACK</NuxtLink>
    </div>
</template>

<script>
// vuejs options api style
export default {
    data: function () {
        return {
            camX: 0,
            camY: 0,
            camZ: 0,
            clientWidth: window.innerWidth,
            clientHeight: window.innerWHeight,
        }
    },
    mounted() {
        window.addEventListener('resize', this.getDimensions);
        const renderer = this.$refs.renderer;
        const camera = this.$refs.camera.camera;
        const island1 = this.$refs.island1.mesh;
        const island2 = this.$refs.island2.mesh;
        const islands = this.$refs.islands;

        renderer.onBeforeRender(() => {
            // camera.rotation.y += 0.01;
        });
    },
    unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
    methods: {
        getDimensions() {
            this.clientWidth = window.innerWidth;
            this.clientHeight = window.innerHeight;
            const camera = this.$refs.camera.camera
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.position.z = (window.innerWidth + 10000) / window.innerWidth;
            console.log(camera.position.z)
            camera.updateProjectionMatrix();

        },
        scaleUp(e) {
            console.log(e.component.mesh.size)
            console.log(e.component.mesh)
            e.component.mesh.scale.x += 0.1
            console.log(e)
        },
        moveCam() {
            const cam = this.$refs.camera.camera;
            cam.position.x += parseInt(this.camX);
            cam.position.y += parseInt(this.camY);
            cam.position.z += parseInt(this.camZ);
        }
    }
};
</script>