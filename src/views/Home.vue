<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Inicio</h1>
      <div class="content-flex">
        <Index/> 
        <Markdown :source="home" class="home setp"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Index from "@/components/Index.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import home_md from '@/md/home.md';
import $ from 'jquery';

export default {
  name: 'Home',
  data: function() {
    return {
      home: home_md,
    }
  },
  methods: {
    zoom: () => {

    }, 
  },
  components: { Bar, Header, Markdown, Index },
  async mounted() {

  },

}
</script>

<style lang="scss">
.home {
  column-count: 1!important;
}
</style>
