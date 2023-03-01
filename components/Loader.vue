<template>
    <Renderer 
        ref="renderer" 
        resize="window"
        class="fixed top-0 left-0 z-[-10]"
    >
        <Camera ref="camera" :position="{ z: 15 }" />
        <Scene background="white" ref="scene">
            <PointLight :position="{ y: 50, z: 20 }" />
                <Mesh 
                    ref="domino" 
                    :size="1" 
                    :position="{ x: 0, y: 2, z: 0 }" 
                    :rotation="{ x: 0, y: 0.5, z: 0 }"
                    @click="$router.push('map')"
                >
                    <BoxGeometry 
                        :height="2" 
                        :depth="0.5" 
                    />
                    <LambertMaterial />
                </Mesh>
        </Scene>
    </Renderer>
</template>

<script>
import { BoxGeometry } from 'troisjs';

export default {
    mounted() {
        const domino = this.$refs.domino.mesh;
        const renderer = this.$refs.renderer;
        console.log(domino)
        renderer.onBeforeRender(() => {
            // console.log(domino.rotation)
            domino.rotation.y += 0.01;
            domino.updateMatrix();
        });
    }
}


</script>