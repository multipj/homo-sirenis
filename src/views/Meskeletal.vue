<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <!--md-2-11 sm-1-12 xs-1-12 -->
    <Header />
    <div class="contain">
      <h1>Aparato locomotor</h1>
      <div class="contenido setp">
        <div class="parte">
          <h2>1. Estructúra osea y cartilaginosa</h2>
          <img src="https://i.imgur.com/hKT4Bj6.png" class="il" />
          <p>
            El esqueleto de los tritones está formado por una combinación de huesos y
            cartílago y tiene estructuras únicas adaptadas a su modo de vida acuático,
            como aletas o colas modificadas para nadar y moverse en el agua, o estructuras
            especializadas para mantener la estabilidad y el equilibrio en el medio
            acuático. Los músculos de los tritones también tienen adaptaciones para el
            movimiento en el agua, como músculos más desarrollados en las aletas o colas
            para proporcionar más fuerza y propulsión en el agua, o músculos
            especializados para mantener la postura y el equilibrio en el medio acuático.
            Además del esqueleto y los músculos, el aparato locomotor de los tritones
            también incluye órganos y sistemas como las articulaciones, los tendones y los
            ligamentos, que son necesarios para permitir el movimiento y la flexibilidad
            de las diferentes partes del cuerpo.
          </p>
        </div>
        <div class="parte">
          <p>
            Aunque es cierto que la musculatura de las sirenas y algunos tritones y es más
            fina que la mayoría de éstos, son capaces de valerse del uso del poder mágico
            para aumentar la fuerza de sus acciones y controlar la corriente a su favor.
            Esto permite que, aunque su musculatura no se vea tan desarrollada, sean
            igualmente capaces de realizar actividades que requieran gran fuerza y control
            en el medio acuático.
          </p>
          <p>
            Su forma y estructura física está adaptada para el movimiento y la propulsión
            en el agua, por lo que no necesitan utilizar una vejiga natatoria para flotar.
            Esto les permite desenvolverse con gran agilidad y movilidad en el medio
            acuático. Además, gracias a su poder mágico, también puedan controlar
            su flotabilidad y densidad de cierta manera.
          </p>
        </div>
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
  name: "Meskeletal",
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
img {
  width: 40%;
}
/*.meskeletal {
  column-count: 2;


  @media (min-width: 1200px) { 

  }
}*/
</style>
