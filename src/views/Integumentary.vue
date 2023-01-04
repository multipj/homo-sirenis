<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Sistema integumentario</h1>
      <div class="contenido setp">
        <!-- PARTE 1 -->
        <div class="parte">
          <h2 id="1-humanskin">1. Piel humana</h2>
          <p>
            De la misma forma que la piel humana esta se compone de la epidermis (la más
            superficial) y la dermis (la parte interior). De cintura para arriba la
            textura de piel es casi idéntica que la de los humanos, compuesta de células
            epiteliales.
          </p>

          <p>
            Es en la piel donde se cumplen importantes procesos inmunológicos,
            osmo-regulatorios, excretores, respiratorios y de recepción de estímulos, que
            le permiten al sireno ajustarse a los cambios del medio ambiente y contribuyen
            a mantener su homeostasis.
          </p>

          <p>
            Del mismo modo que los humanos la epidermis se regenera a partir de células
            madre ubicadas en la capa basal que crecen hacia el córneo. La epidermis en sí
            está desprovista de suministro de sangre y deriva su nutrición de la dermis
            subyacente.
          </p>

          <p>
            La cuestión del cabello y uñas también son similares, pero a pesar del
            parecido visual, difieren en dos puntos:
          </p>

          <p>
            En primer lugar, las glandulas exocrinas que en principio funcionan parecido
            al de los humanos pero tienen una propiedad adicional que recuerda a la de los
            peces Tenca con el recubrimiento de su piel a una especie de limo que hace la
            piel visualmente humana más resbalosa y que al mismo tiempo actúa como aislnte
            térmico. Además, poseen una capa gruesa de grasa bajo la dermis que actúa de
            la misma manera.
          </p>

          <p>
            Entre los dedos de sus manos son visibles unas membranas traslúcidas que se
            regeneran con tiempo una vez son dañadas, capaces de contraerse a placer hasta
            luciendo manos normales.
          </p>
        </div>

        <!-- PARTE 2 -->
        <div class="parte">
          <h2 id="2-marineskin">1. Piel marina</h2>
          <img src="https://i.imgur.com/cxSym2K.png" class="ir aleta" />
          <p>
            De cintura para abajo es la dermis la que contiene las escamas, que son de
            tipo cicloides muy diminutas en la zona de la cola, y que están profundamente
            incrustadas en una piel gruesa. Esta parte del homo sirenis recuerda más al de
            la anguilas, pues sus escmas no son nada rasposas, y en cambio se sienten
            suaves al tacto y tan pequeñas que lucen como diminutos puntitos.
          </p>

          <p>
            La protección física del homo sirenis está daptada para funcionar en el medio
            acuático en el que habita. La piel de su aleta está cubierta de escamas
            pequeñas que no proporcionan protección física contra lesiones y daños
            externos como cortes y raspones, pero que se regeneran con el tiempo. Además,
            tiene una capa de grasa subcutánea que actúa como aislante térmico y protege
            al organismo del frío en aguas profundas y frías.
          </p>
        </div>

        

        <div class="parte">
          <h2>4. Protección química contra el medio</h2>

          <p>
            La piel tiene una capa de aceites que ayudan a proteger al organismo de
            sustancias tóxicas y dañinas que pudieran entrar en contacto con la piel.
            Además, tiene una capa de mucus en la piel que actúa como barrera química y
            protege al organismo de sustancias tóxicas y dañinas.
          </p>

          <p>
            Tiene glándulas sudoríparas que produjeran sudor para ayudar a enfriar el
            cuerpo cuando hace demasiado calor fuera del agua, lo que les da ese tacto
            resbaloso. Además, tiene un músculo esquelético subcutáneo y un tejido graso
            subcutáneo que actuaran como aislantes térmicos y ayudaran a mantener la
            temperatura del cuerpo.
          </p>

          <p>
            En cuanto a la protección contra infecciones, el homo sirenis tiene na capa de
            células muertas y aceites en la piel que crean un ambiente desfavorable para
            la supervivencia de los gérmenes y protegieran al organismo de las
            infecciones.
          </p>
        </div>

        <div class="parte">
          <h2>3. Producción de hormonas</h2>

          <p>
            Producen hormonas de manera similar a otros animales, a través de glándulas
            endocrinas especializadas. Algunas de las glándulas tiroides, las glándulas
            suprarrenales y las glándulas gonadas. Estas glándulas producen hormonas que
            son esenciales para el crecimiento, el desarrollo y el mantenimiento de la
            salud. Además, tienen otras otras glándulas endocrinas importantes, como la
            hipófisis y la glándula pineal, que producen hormonas que son esenciales para
            el funcionamiento adecuado del organismo.
          </p>

          <p>
            Algunas hormonas, como la tiroxina producida por la glándula tiroides, son
            esenciales para el crecimiento y el desarrollo. Otras hormonas, como la
            insulina producida por el páncreas, ayudan a controlar los niveles de glucosa
            en la sangre. También hay hormonas que juegan un papel en la regulación de la
            presión arterial, el metabolismo, el sueño, el estado de ánimo y otras
            funciones vitales.
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

export default {
  name: "Integumentary",
  data: function () {
    return {};
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss">
.aleta {
  outline: 1px solid #efefef;
  width: 205px;
  outline-offset: 3px;
}
</style>
