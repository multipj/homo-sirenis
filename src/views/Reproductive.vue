<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Aparato reproductor</h1>
      <div class="contenido setp">
        <!-- PARTE 1 -->
        <h2 id="1-hermafroditismo">1. Hermafroditismo</h2>
        <img src="https://i.imgur.com/PgvjIaz.png" class="il"/>
        <div class="part hp1"></div>
        <img src="https://i.imgur.com/s9bbjXW.png" class="ir"/>
        <div class="part hp2"></div>

        <!-- PARTE 2 -->
        <h2 id="2-ovoviviparismo">2. Ovoviviparismo</h2>
        <div class="part op1"></div>
        <img src="https://i.imgur.com/tLqXyI9.png" class="il"/>
        <div class="part op2"></div>

        <!-- PARTE 3 -->
        <h2 id="3-hibridaciones">3. Hibridaciones</h2>
        <div class="part hib"></div>
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
  name: 'Reproductive',
  data: function() {
    return {
      hp1: import(`@/md/reproductive/hp1.md`).then(val => val.default),
      hp2: import(`@/md/reproductive/hp2.md`).then(val => val.default),
      hib: import(`@/md/reproductive/hib.md`).then(val => val.default),
      op1: import(`@/md/reproductive/op1.md`).then(val => val.default),
      op2: import(`@/md/reproductive/op2.md`).then(val => val.default)
    }
  },
  methods: {
  },
  components: { Bar, Header, Markdown },
  async mounted() {
    document.querySelector(".part.hp1").innerHTML = marked.parse(await this.hp1);
    document.querySelector(".part.hp2").innerHTML = marked.parse(await this.hp2);
    document.querySelector(".part.op1").innerHTML = marked.parse(await this.op1);
    document.querySelector(".part.op2").innerHTML = marked.parse(await this.op2);
    document.querySelector(".part.hib").innerHTML = marked.parse(await this.hib);
  }

}
</script>

<style lang="scss">
</style>
