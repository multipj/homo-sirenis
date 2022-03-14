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

  @import url(//db.onlinewebfonts.com/c/d1700e1b6b448748050f017e26446980?family=MrsEavesSmallCaps);
  @import url(//db.onlinewebfonts.com/c/fa4003152086e52560e24d072de1b92b?family=Chaz+Condensed);
  @import url(//db.onlinewebfonts.com/c/f05f148ec6596f0b75375fa566aaf1fe?family=Bely);
  h1 {

    font-size: 2.6rem;
    //font-style: italic;
    font-weight: 800;
    //font-family: "MrsEavesSmallCaps", serif;
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
