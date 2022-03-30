<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Mitos y orígenes</h1>
      <Markdown :source="home" class="setp"/>
      <router-link to="/" tag="button" class="button-back">Atrás</router-link>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import home_md from '@/markdown/example.md';
import $ from 'jquery';

export default {
  name: 'Myths',
  data: function() {
    return {
      home: home_md,
    }
  },
  methods: {
  },
  components: { Bar, Header, Markdown },
  async mounted() {

  },

}
</script>

<style lang="scss">
</style>
