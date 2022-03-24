<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Taxonomía</h1>
      <Markdown :source="home" class="home"/>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import home_md from '@/markdown/home.md';
import $ from 'jquery';

export default {
  name: 'Taxonomy',
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
