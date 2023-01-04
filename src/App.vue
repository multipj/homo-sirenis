<template>
  <div class="shadow"></div>s
  <router-view/>
</template>

<script>
import Home from "@/views/Home.vue"

export default {
  name: 'App',
  components: { Home },
  mounted() {}
}
</script>

<style lang="scss">
.il {
  float: left; 
  margin: 0px 15px 15px 0px;
}

.ir {
  float:right; 
  margin: 0px 0px 15px 15px;
}

@import "@/styles/grid/grid.xs.scss";
@import "@/styles/grid/grid.sm.scss";
@import "@/styles/grid/grid.md.scss";
@import "@/styles/grid/grid.lg.scss";
@import "@/styles/grid/grid.default.scss";

.part {
    margin-bottom: 15px;
}

@font-face {
  font-family: "Chaz Condensed";
  src: url("@/assets/ChazCondensed-Bold.ttf");
}

@font-face {
  font-family: "Beaufort";
  src: url("@/assets/BeaufortforLOL-Bold.woff");
}

@font-face {
  font-family: "Spiegel";
  src: url("@/assets/Spiegel.ttf");
}

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

// cosas supuestamente de home
@media (min-width:   0px) { .setp { column-count: 1; } }
@media (min-width: 768px) { .setp { column-count: 2; } }
.setp {
  img  {
    width: 50%;
  }
  .parte {
    break-inside: avoid;
  }
}


.magnifying-glass { background-size: 320%!important; }


.wrap {
    display: inline-block;
    background-color: rgb(255, 255, 255);
    grid-row-start: content;
    border-radius: 0rem;
    min-height: 100px;
    word-break: break-word;
}

.contain {
  margin: 40px;

  h1 {
    text-transform: uppercase;
    font-style: italic;
    font-size: 2.3rem;
    font-weight: 800;
    text-shadow: 0px 0.5px, 0.5px 0px, 0.5px 0.5px;
    font-family: "Beaufort", serif;

    &::first-letter {
      font-size: 2.6rem;
      font-weight: bold;
    }
  }
}

.button-back {
  background: #000;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px 10px 10px 14px;
  font-size: 11px;
  letter-spacing: 2.5px;
  position: relative;
  top: 15px;
}

h2 {
    margin-top: 0;
    font-size: 26px;
    font-family: Beaufort,serif;
    font-style: italic;
    letter-spacing: -0.5px;
}




</style>
