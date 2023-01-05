<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Aparato digestivo</h1>
      <div class="contenido setp">
        <div class="parte">
          <h2>1. Introducción</h2>
          <p>
            El homo sirenis tiene un aparato digestivo similar al de los humanos, con una
            boca, faringe, esófago, estómago y intestino delgado y grueso. Tienen dientes
            especializados para triturar y desmenuzar su dieta, que principalmente está
            compuesta por peces y mariscos. También tienen glándulas salivales que
            producen lipasa, una enzima digestiva que ayuda a digerir grasas. El homo
            sirenis también tiene un hígado y un páncreas para producir hormonas y enzimas
            digestivas, y una vejiga biliar para almacenar y liberar bilis, una sustancia
            que ayuda a digerir grasas y absorber nutrientes.
          </p>
        </div>
        <div class="parte">
          <h2>2. Tipo de dieta</h2>

          <p>
            Aunque hay especies de tritones y sirenas que unicamente se alimentan de
            humanos, y otras tantas que unicamente se alimentan de algas y similares. La
            especie que aquí se describe es omnívora, pues se alimentan principalmente de
            peces, mariscos y algas, y es posible que también consuman carne de animales
            terrestres dependiendo de su entorno y disponibilidad.
          </p>

          <p>
            Tienen dientes adaptados para masticar y triturar tanto alimentos vegetales
            como animales, y una lengua adaptada para recoger alimentos. Además, poseen un
            sistema de digestión similar al de los humanos, con la capacidad de producir
            jugos gástricos y digestivos para descomponer los alimentos y absorber
            nutrientes.
          </p>
        </div>
        <div class="parte">
          <h2>3. Reacciones ante sustancias no habituales</h2>
          <p>
            Cuando el homo sirenis ingiere sustancias a las que su sistema digestivo no está acostumbrado, es posible que experimente efectos secundarios. Por ejemplo, el azúcar y la cafeína son dos sustancias comúnmente consumidas por los humanos, pero que pueden tener un impacto en el sistema digestivo de los tritones y sirenas.
          </p>
          <p>
            El azúcar es un carbohidrato que puede ser digerido fácilmente por el sistema digestivo humano y otros mamíferos, pero en el caso de los tritones y sirenas, su sistema podría no estar preparado para procesar grandes cantidades de azúcar. Esto puede llevar a problemas gastrointestinales y alteraciones en el nivel de azúcar en la sangre.
          </p>
          <p>
            En el caso de la cafeína, el cuerpo de un Homo Sirenis no dispone de los receptores necesarios para procesarla, lo que podría llevar a reacciones adversas como insomnio, nerviosismo, acidez estomacal y alteraciones en el ritmo cardiaco.
          </p>
        </div>
        <div class="parte">
          <h2>4. Proceso digestivo</h2>
          <p>
            El proceso digestivo del homo sirenis es bastante similar al de los humanos y
            otros mamíferos terrestres. Al igual que los humanos, los tritones tienen una
            boca, faringe, esófago, estómago y intestino delgado y grueso. También tienen
            dientes adaptados para triturar y masticar su dieta, que principalmente
            consiste en peces y mariscos. Además, también disponen de glándulas salivales
            que producen la enzima digestiva lipasa, que ayuda a digerir las grasas de su
            dieta.
          </p>
          <p>
            Como los humanos, tienen un hígado y páncreas que producen hormonas y enzimas
            digestivas, y una vejiga biliar que almacena y libera bilis. Sin embargo, a
            diferencia de otros mamíferos marinos como cetáceos y ballenas, el homo
            sirenis no tiene la capacidad de eliminar desechos a través de su piel y
            branquias. Por lo tanto, su sistema urinario es similar al de los humanos,
            compuesto por riñones, vejiga y uretra, y se encarga de eliminar los desechos
            del cuerpo.
          </p>
          <p>
            En términos de similitudes con otros animales marinos, el homo sirenis
            comparte algunos aspectos de su proceso digestivo con cetáceos y tiburones. Al
            igual que estos animales, el homo sirenis tiene un sistema de digestión rápido
            y eficiente que le permite procesar y extraer nutrientes de su dieta acuática.
            Además, utilizan enzimas digestivas similares para descomponer los alimentos y
            absorber los nutrientes y la forma de la dentadura del homo sirenis está a
            medio camino entre la dentadura humana y la de algunas especies de tiburones
            adaptadas para triturar y masticar alimentos. Y por añadido.
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
  name: "Digestive",
  data: function () {
    return {};
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss"></style>
