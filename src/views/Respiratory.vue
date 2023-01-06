<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <div class="contenido setp">
        <div class="parte">
          <h2>1. Aparato respiratorio pulmo-branquial</h2>

          <p>
            El homo sirenis es una especie cuyo aparato respiratorio singular guarda
            similitud con los dipnoi. Sin embargo, a diferencia de estos peces pulmonados,
            el homo sirenis no llega a perder la capacidad de respirar por las branquias
            en la adultez, por lo que pueden respirar bajo el agua de manera indefinida
            sin tener que salir a la superficie a tomar aire por los pulmones.
          </p>
        </div>

        <div class="parte">
          <h2>2. La hematosis en diversas especies</h2>

          <p>
            La hematosis es la forma de obtener oxígeno. Antes de explicar la hematosis en
            el Homo Sirenis y la forma en que alternan la respiración por branquias o por
            pulmones, es preciso diferenciar las distintas formas de obtenención de
            oxígeno entre las distintas especies branquiales:
          </p>

          <p>
            Por un lado estan <b>los osteicos</b> (peces comunes) que poseen opérculos que
            actuan como tapas para controlar el flujo del agua que entra por la boca y
            expulsan por las agallas. Por otro lado están los <b>tiburones</b> que
            presentan branquias desnudas (sin opérculos) lo que les obliga a estar en
            movimiento para poder hacer pasar el agua a través de ellas. Y finalmente
            están los <b>pulpos</b> que poseen un sifón para controlar la succión y
            expulsión del agua (y que además actúa como válvula) en una cavidad donde se
            encuentran las branquias (el ctenidio en su caso).
          </p>
        </div>

        <div class="parte">
          <h2>3. La respiración dentro del agua</h2>

          <p>
            En el caso del homo sirenis, al igual que los tiburones, poseen aberturas
            desnudas en la zona del cuello por las que se filtra el agua, sin embargo, las
            branquias no se encuentran pegadas, debajo de éstas, sino que dichas aberturas
            confluyen en una especie de cámaras dentro de la caja torácica, donde se hayan
            los ctenidio (sus branquias), una en cada cámara, y cuya entrada es gestionada
            por sifones que succionan y expulsan el agua como los pulpos.
          </p>

          <p>
            Debido a la presencia de pulmones y branquias simultaneas, el cuerpo de los
            sirenos y sirenas se ha adaptado para evitar el encharcamiento de los
            primeros, aunque dicho órgano permanezca más tiempo inactivo que las
            bránquias, es por eso que los pulmones de los homo sirenis están menos
            desarrolldos que el de los humanos, y en lugar de poseer una epiglotis para
            evitar que se cuele el agua en los bronquios, disponen de una válvula más
            sofisticada que se cierra de manera involuntaria dependiendo de la presión
            hidrostática, es decir, la presión ejercida por el agua sobre el cuerpo, como
            si poseyeran un sensor interno que detectara el momento en que su cuerpo se
            expone a un aumento de presión durante el descenso al fondo marino.
          </p>
          <h2>4. La respiración fuera del agua</h2>
          <p>
            Cuando el homo sirenis se encuetra fuera del agua, el homo sirenis dispone de
            un mecanismo interno que se encarga de segregar una sustancia hipertónica
            (sustancia oxigenada con solutos) en los sacos alargados donde se hallan las
            branquias permanecen hidratadas y por esta razón no se secan una vez se
            encuentra fuera del agua, pudiendo permanecer por bastante tiempo fuera de
            dicho medio sin que se estropeen.
          </p>
        </div>

        <div class="parte">
          <p>
            Como tienen que producir y secretar más sustancia hipertónica para renovarla,
            es importante tener en cuenta que la producción y secreción de esta sustancia
            requiere de energía y recursos del cuerpo, por lo que debe equilibrar esta
            necesidad con la necesidad de mantenerse hidratado y evitar la deshidratación.
          </p>
          <p>
            Un dato curioso es que las hendiduras del cuello del sireno o sirena conectan
            tanto con la faringe como con los sacos branquiales, y además, los orificios
            nasales no conectan con los pulmones, sino que su función es meramente
            olfativa. De esta manera, los sirenos poseen también dos vías para inhalar el
            aire, así como los humanos, sólo que en su caso estas vías son la boca y las
            hendiduras del cuello.
          </p>
        </div>

        <div class="parte">
          <h2>5. Mecanismos contra la descompresión</h2>

          <p>
            El homo sirenis utiliza el mismo mecanismo que otros mamíferos marinos para no
            sufrir la patología de descompresión del buzo tras emerger demasiado rápido.
            Esto se debe a la presencia de dos regiones pulmonares diferentes sumado a la
            estructura de sus pechos y su caja torácica cartilaginosa que permite que sus
            pulmones se compriman mientras se encuentran bajo el agua como lo hacen los
            cetáceos.
          </p>

          <p>
            Además, sumado a esto, poseen un mecanismo especial (esfínteres pulmonares)
            que evitan el riego de sngre a los pulmones durante la inmersión, al igual que
            las tortugas. De esta forma evitan solubilizar el nitrógeno que les provocaría
            el embolismo.
          </p>

          <p>
            El primer mecanismo funciona de la siguiente manera: Cuando los tritones se
            sumergen bajo el agua y el cuerpo se somete a presión, el aire en sus pulmones
            es expulsado y una región de sus pulmones se comprime. Esto permite lo que se
            conoce como
            <i>una falta de coincidencia entre la ventilación y la perfusión</i> donde la
            sangre fluya únicamente a través de la región comprimida de los pulmones,
            impidiendo así, un intercambio de nitrógeno, y permitiendo que el oxígeno y el
            dióxido de carbono sean absorbidos por la sangre. Esto protege a los tritones
            del trastorno de descompresión al evitar la ingesta excesiva de nitrógeno.
          </p>

          <p>
            A pesar de no tener problemas con el intercambio de gases en el desceneso a
            una profundidad de máximo mil metros, son incapaces de descender a
            profundidades abisales (seis veces mayor) debido a la fuerte presión que
            ejerce en su estructura ósea, que no está preparada para soportarlo. Además,
            de ser incapaces de sobrevivir con el escaso oxígeno de las profundidades y la
            dificultad para hallar comida.
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
//import Markdown from 'vue3-markdown-it';
//import md from '@/md/respiratory.md';
import $ from "jquery";

export default {
  name: "Breath",
  data: function () {
    return {};
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss"></style>
