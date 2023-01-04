<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Aparato circulatorio</h1>
      <div class="contenido setp">
        <div class="parte">
          <h2>1. Oxigención de la sangre</h2>
          <p>
            El corazón del homo sirenis es similar al de los humns pues tienen un sistema
            circulatorio con dos aurículas y dos ventrículos. La aurícula izquierda es la
            encargada de recibir la sangre pobre en oxígeno del cuerpo y el ventrículo
            izquierdo es el encargado de bombearla hacia las branquias y los pulmones para
            su oxigenación. La arteria pulmo-branquial es una vía que sale del ventrículo
            izquierdo y se bifurca para conducir la sangre pobre en oxígeno tanto a las
            branquias como a los pulmones. Sin embargo la sangre que vuelve de los
            pulmones, conflue de nuevo en la misma arteria.
          </p>

          <p>
            Cuando los tritones están bajo el agua, las branquias se encargan de oxigenar
            completamente la sangre que llega a través de la arteria pulmo-branquial.
            Cuando los tritones están en la superficie, las branquias permanecen inactivas
            y la sangre mezclada por la oxigenación de los pulmones (ahora sí activos) y
            la sangre pobre en oxigeno, se mantiene mixta y es más difícil para los
            tritones mantenerse oxigenados respirando aire.
          </p>

          <p>
            Por eso, compensan dicha carencia con una respiración cutánea de manera
            complementaria, pues no es una vía de respiración principal. De esta manera,
            la piel de los tritones ayudan a intercambiar gases con el aire o el agua, y
            así poder obtener una cantidad adicional de oxígeno.
          </p>

          <p>
            Sin embargo, es importante tener en cuenta que la respiración cutánea tiende a
            ser menos eficiente que otras formas de respiración, como la respiración
            pulmonar o branquial, y por lo tanto no proporciona a los tritones la cantidad
            suficiente de oxígeno que necesitan para su metabolismo. Por lo tanto, los
            tritones dependen principalmente de sus pulmones o branquias para obtener
            suficiente oxígeno, y utilizan la respiración cutánea como una forma
            complementaria de obtener una cantidad adicional de oxígeno cuando sea
            necesario.
          </p>
        </div>
        <div class="parte">
          <h2>1. La sangre</h2>
          <p>
            En general, la sangre de los seres vivos suele ser roja debido a la presencia
            de la proteína llamada hemoglobina, que es responsable de transportar el
            oxígeno desde los pulmones o las branquias hasta las células del cuerpo. La
            hemoglobina es el componente principal de los glóbulos rojos o eritrocitos,
            que son los componentes más abundantes de la sangre.
          </p>

          <p>
            La sangre de los tritones tiene una concentración similar de glóbulos rojos y
            hemoglobina que la de los humanos y los delfines, ya que estos animales tienen
            un metabolismo y un sistema circulatorio muy parecidos. Sin embargo, la sangre
            de los tritones difiere en algunos aspectos, como en la presencia de otras
            proteínas o sustancias que ayudan a adaptarse a su medio ambiente o a su modo
            de vida.
          </p>
          <p>
            Un ejemplo es la presencia de anticongelantes, es decir, una sustancia que
            impide que se congele a bajas temperaturas. Esto le permite a los tritones
            poder vivir y desplazarse en aguas muy frías, como ocurre en algunas regiones
            polares o en las profundidades marinas.
          </p>
        </div>
        <div class="parte">
          <h2>1. Los glóbulos rojos</h2>
          <p>
            Los glóbulos rojos de los tritones tienen algunas características similares a
            los de los humanos y otros cetáceos. Sin embargo tienen una mayor cantidad
            mayor que la de los humanos, lo que les permite tener una mayor capacidad para
            transportar oxígeno y soportar largos periodos de tiempo sin respirar
          </p>
        </div>
      </div>
      <br />
      <router-link to="/" tag="button" class="button-back">Atrás</router-link>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Circulatory",
  data: function () {
    return {};
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss"></style>
