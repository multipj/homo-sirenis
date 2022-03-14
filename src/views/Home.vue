<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Hola mundo</h1>
      <Markdown :source="home"/>
    </div>
    
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import Markdown from 'vue3-markdown-it';
import home_md from '@/markdown/home.md';

export default {
  name: 'Home',
  data: function() {
    return {
      home: home_md
    }
  },
  components: { Bar, Header, Markdown },
  async mounted() {
    console.log(this.home);
  },

}
</script>

<style lang="scss">
  @font-face {
    font-family: "Chaz Condensed";
    src: url("@/assets/ChazCondensed-Bold.ttf");
  }

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

    font-size: 2.6rem;
    font-weight: 800;
    font-family: "Chaz Condensed", serif;

    &::first-letter {
      font-size: 2rem;
      font-weight: 800;
    }
  }

  p {
    margin-top: 0px;
  }
  @media (min-width: 0px) {
    div {
      column-count: 1;
    }
  }
    @media (min-width: 992px) {
    div {
      column-count: 2;
    }
  }

}
</style>
