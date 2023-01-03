<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Sistema linfálico-inmune</h1>
      <Markdown :source="md" class="setp"/>
      <router-link to="/" tag="button" class="button-back">Atrás</router-link>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import md from '@/md/linfalico-inmune.md';
import $ from 'jquery';

export default {
  name: 'Lymphatic',
  data: function() {
    return {
      md: md,
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
