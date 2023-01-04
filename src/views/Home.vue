<template>
  <Bar/>
  <div class="wrap xs-1-12 md-2-11">
    <Header/>
    <div class="contain">
      <h1>Inicio</h1>
      <div class="content-flex">
        <Index/> 
        <div><p>Bienvenidos a la documentación de la especie de tritones Homo Sirenis creada por el autor en a partir de su headcanon. Esta página está dedicada a detallar de forma razonada y coherente las características biológicas y anatómicas de esta especie ficticia. El objetivo es proporcionar una fuente de referencia para aquellas personas que quieran narrar historias con sirenos y sirenas y quieran ser precisos con sus detalles, tomando alguno de los elementos que aquí se describen si fuera de su interés.</p>

        <p>Aunque esta especie es completamente ficticia, como es obvio, se ha tratado de basar su anatomía en rasgos reales de otros animales para hacerla lo más creíble posible. Sin embargo, hay ciertos detalles que, por mucho fundamento real que se le dé, escapan un poco de la realidad. Por ello, también se ha tomado la libertad de incluir elementos mágicos en su descripción, pues no está de más aprovechar que se está tratando un mundo ficticio mágico donde habitan los tritones, así como la existencia de la magia.</p>

        <p>Se espera que esta página sea de utilidad para todos aquellos interesados en el mundo de los tritones y se agradecen de antemano cualquier comentario o sugerencia que deseen hacer llegar.</p></div>
      </div>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Index from "@/components/Index.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import $ from 'jquery';

export default {
  name: 'Home',
  data: function() {
    return {}
  },
  methods: {},
  components: { Bar, Header, Footer, Index },
  async mounted() {},
}
</script>

<style lang="scss">
.home {
  column-count: 1!important;
}
</style>
