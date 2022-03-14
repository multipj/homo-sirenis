<template>
  <router-view/>
</template>

<script>
import Home from "@/views/Home.vue"
export default {
  name: 'App',
  components: { Home }
}
</script>

<style lang="scss">
@import "@/styles/grid/grid.xs.scss";
@import "@/styles/grid/grid.sm.scss";
@import "@/styles/grid/grid.md.scss";
@import "@/styles/grid/grid.lg.scss";
@import "@/styles/grid/grid.default.scss";

body {
  background: #0a0a0a;
}

::-webkit-scrollbar { // fondo
  background: #111111;
  border: 3px solid #111111;
  width: 7px;
}

::-webkit-scrollbar-button { // botones arriba y abajo
  color: white;
  border-radius: 5px;
  background: #0c0c0c;
  border: 3px solid #010101;
}

::-webkit-scrollbar-thumb { // dragger
  background: #bdbdbd;
  border: 3px solid #010101;
}

a {
  text-decoration: none;
}

[c-title] {
  transition: 0.55s;
  opacity: 0;
  &:hover {
    transition: 0.55s;
    opacity: 1;
    &::after {
      position: relative;
      bottom: 30px;
      left: 5px;
      content: attr(c-title);
      color: rgb(201, 201, 201);
      background: #000;
      padding: 5px;
      border: 1px solid #080808;
      z-index: 10;
      font-size: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 1px;
    }
  }
}



</style>
