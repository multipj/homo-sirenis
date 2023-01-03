<template>
    <div></div>
</template>

<script>
export default {
    name: 'zimg',
    data() {
        return {
            img: null,
            width: null,
            height: null,
            bounds: null,
            cursorX: 0,
            cursorY: 0,
            thumbPos: {x: 0, y: 0},
            backgroundPos: '0 0',
        };
    },
    props: {
        src: String,
    },
    computed: {   
    },
    methods: {},
    mounted() {},
    
};
</script>

<style lang="scss">
</style>
