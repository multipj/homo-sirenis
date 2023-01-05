<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Taxonomía</h1>
      <div class="parte">
        <h2>1. Introducción</h2>

        <img src="https://i.imgur.com/WCf9itA.png" class="il" />

        <p>
          Las especies pertenecientes al grupo de <b>Animalia</b> se caracterizan por su
          amplia capacidad de movimiento, por no tener cloroplasto (aunque hay
          excepciones, como en el caso de <i>Elysia chlorotica</i>) ni pared celular, y
          por su desarrollo embrionario; que atraviesa una fase de blástula y determina un
          plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis
          posterior como los artrópodos).
        </p>

        <p>
          Los <b>Cordados</b> (<i>Chordata</i>, del griego χορδωτά <i>khordota</i> 'con
          cuerda') son un filo del reino animal caracterizado por la presencia de una
          cuerda dorsal o <i>notocorda</i> (o notocordio) de células turgentes,​ tubo
          neural hueco en posición dorsal, hendiduras branquiales y cola, por lo menos en
          alguna fase del desarrollo embrionario.
        </p>

        <p>
          Los <b>Ichthyomammalia</b> son un grupo de mamíferos como los cetáceos, pero que
          comparten rasgos comunes con los <i>condrictios</i> y por la presencia de buena
          parte de un esqueleto cartilaginoso, y los <i>osteictios</i>, que corresponde a
          los peces óseos. El enfoque en uno de sus infraclases es el del ovoviviparismo
          con un caso singular de matrotrofia placentaria. En este grupo, el embrión
          dentro de los huevos bentónicos consumen pronto el suministro, y es la placenta
          la que se encarga de proporcionar el suministro adicional.
        </p>

        <p>
          Los <b>Syreniformes</b> o <b>Syrenomorpha</b> corresponden a todas las especies
          de sirenas y sirenos que presentan una parte superior de <i>homínido</i> y una
          parte inferior similar a la aleta de un tiburón (O cualquier otro pez). Se
          agrupan todas las variaciones, ya sean los syreniformes que poseen membranas en
          lugar de oídos más similares al de los humanos, los que poseen aspecto más
          humano, syreniformes que viven en aguas abisales, otros que poseen aletas
          ventrales, otros que no, merfolks, etc.
        </p>

        <p>
          Los grupos debajo de este orden todos son muy similares en común pero lo
          diferencian el tipo de dieta común. Puramente carnívoros, o puramente
          herbívoros, o bien ciertos rasgos encefálicos que los hacen actuar más o menos
          agresivos. El caso de esta documentación se trata al <i>Homo Sirenis</i> un caso
          de sirenas y tritones omnívoros, cuya agresividad es baja, y actúan y razonan de
          manera casi idéntica a los humanos.
        </p>

        <p>
          El género <b>Homosyrenini</b> o <b>Sirenis</b> asecas, incluye a todas las
          especies de sirenas y tritones que comparten características genéticas y
          fenotípicas similares. Estos seres tienen una parte superior de homínido y una
          parte inferior similar a la aleta de un tiburón (o cualquier otro pez). Pueden
          presentar diferentes rasgos, como oídos más similares a los humanos, aspecto más
          humano, vivir en aguas abisales, tener aletas ventrales o no, etc. Se alimentan
          de una variedad de alimentos, incluyendo carne y vegetales. Se caracterizan por
          tener una agresividad baja y por actuar y razonar de manera similar a los
          humanos.
        </p>
      </div>
      <router-link to="/" tag="button" class="button-back">Atrás</router-link>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";
import $ from "jquery";

export default {
  name: "Taxonomy",
  data: function () {
    return {
    };
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss">
.tax {
  column-count: 1;
}

.tax img {
  width: 141px;
}
</style>
