<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Sistema integumentario</h1>
      <div class="contenido setp">
        <!-- PARTE 1 -->
        <h2 id="1-humanskin">1. Piel humana</h2>
        <div class="part p1"></div>

        <!-- PARTE 2 -->
        <h2 id="2-marineskin">1. Piel marina</h2>
        <img src="https://i.imgur.com/cxSym2K.png" class="il"/>
        <div class="part p2"></div>

      </div>
      <router-link to="/" tag="button" class="button-back">Atrás</router-link>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import { marked } from "marked";

export default {
  name: 'Integumentary',
  data: function() {
    return {
      p1: import(`@/md/integumentary/p1.md`).then(val => val.default),
      p2: import(`@/md/integumentary/p2.md`).then(val => val.default)
    }
  },
  methods: {
  },
  components: { Bar, Header, Markdown },
  async mounted() {
    document.querySelector(".part.p1").innerHTML = marked.parse(await this.p1);
    document.querySelector(".part.p2").innerHTML = marked.parse(await this.p2);
  },

}
</script>

<style lang="scss">
</style>
