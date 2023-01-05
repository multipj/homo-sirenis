<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Sistema nervioso</h1>
      <div class="contenido setp">
        <div class="parte">
          <h2>1. Introducción</h2>
          <p>
            El cerebro del homo sirenis es similar al de otros mamíferos, sobre todo el de
            los humanos, con áreas dedicadas a funciones como la percepción, la memoria,
            el lenguaje y el pensamiento. Son sensibles al cambio de temperatura y presión
            debido a su hábitat acuático, y también puede detectar vibraciones y
            movimientos en el agua gracias a las células sensoriales presentes en su piel.
          </p>
          <p>
            Poseen reflejos rápidos y precisos que le permiten moverse y reaccionar de
            manera eficiente en el agua, lo que les permite evitar peligros y cazar
            alimento. Además, tienen un control muscular preciso y puede moverse con gran
            habilidad en el agua gracias a su sistema nervioso y músculos bien
            desarrollados. Esto también le permite realizar movimientos específicos, como
            nadar en círculos o hacer loopings.
          </p>
        </div>
        <div class="parte">
          <h2>2. Adaptación en aguas salinas y dulces</h2>
          <p>
            Una de las funciones del sistema nervioso es participar en la regulación de la
            homeostasis (Además de regular la temperatura, el pH, la osmolaridad, la
            concentración de algunos metabolitos).
          </p>
          <p>
            La <b>homeostasis</b> es el mantenimiento de un ambiente interno constante a
            pesar de las perturbaciones externas. El sistema nervioso detecta las
            perturbaciones del ambiente interno y envía señales para que el organismo
            pueda compensar esas perturbaciones.
          </p>
          <p>
            La ósmosis en peces es un mecanismo de regulación del agua que se produce a
            través de una membrana semipermeable. El proceso permite que los niveles de
            solutos en las células se equilibren con el movimiento y el flujo de agua que
            pasa a través de la membrana.
          </p>
          <p>
            En el caso del salmón, la anguila o el tiburón toro, sus pieles permean poco,
            lo que minimiza la pérdida de agua. Son organismos de agua salada, pero al
            entrar en aguas dulces producen más orina para depurar y equilibrar.
          </p>
          <p>
            El homo sirenis pueden sobrevivir tanto en agua salada como dulce gracias a
            que tienen una glándula que les permite regular la salinidad de su cuerpo,
            esta glándula se encuentra en el recto como la glándula salina de los
            tiburones, y segrega una sustancia que les permite mantener el equilibrio
            necesario para vivir en los dos ambientes. Además de esto, las branquias
            constituyen un órgano clave para la osmorregulación, pues éstas en su
            composición celular, poseen células especiales para la eliminación de dichas
            sales.
          </p>
        </div>
        <div class="parte">
          <h2>3. La termoresistencia</h2>
          <p>
            El homo sirenis pertenece al grupo de <b>endotermos</b> lo que significa que
            calientan sus tejidos corporales por medio de la producción metabólica de
            calor, y además son <b>homeotermos</b>, es decir, su termoregulación se basa
            en procesos fisiológicos.
          </p>
        </div>
        <div class="parte">
          <p>
            Cuando exponen a temperaturas muy altas (pero no letales) producen proteínas
            de choque térmico o de estrés. Las proteínas de choque térmico se sintetizan
            sólo cuando aumenta mucho la temperatura corporal o por algún otro factor. El
            aumento de la temperatura del cuerpo supone un riesgo importante de muerte ya
            que produce la pérdida de muchas funciones por la desnaturalización de las
            proteínas. Así pues, las proteínas de choque térmico se encargan de compensar
            la desnaturalización de las proteínas ayudándolas a plegarse nuevamente. Este
            proceso requiere una gran cantidad de energía.
          </p>
          <p>
            Por otra parte, para evitar la congelación de sus líquidos corporales son
            capaces de producir anticongelantes, sustancias que se segregan a los líquidos
            para disminuir el punto de congelación. No sienten frío pues poseen una fina
            capa de sustancia transparente bajo su piel, aislante, que les protege del
            frío del agua, la cual se expulsa por los poros cuando el calor aumenta
            haciendo que su tacto torne resbaloso fuera del agua.
          </p>
        </div>

        <div class="parte">
          <h2>4. La comunicación interespecie</h2>
          <p>
            El homo sirenis uede utilizar señales visuales y auditivas para comunicarse
            con otros seres acuáticos. Los tritones y sirenas también pueden utilizar el
            lenguaje corporal y el contacto físico para comunicarse entre sí y con otros
            seres acuáticos.
          </p>
          <p>
            Son capaces de interceptar el sonido de las ballenas, dado que su sistema
            nervioso es muy sensible a estas señales y les permite comprender y responder
            a ellas de manera efectiva. Además, tienen un oído altamente desarrollado y
            una gran capacidad auditiva. Del mismo modo, han aprendido a reproducir dichos
            sonidos, y para responder a éstos lo hacen mediante pulsos telepáticos, los
            cuales también usan para desorientar bancos de peces en sus cacerías.
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
  name: "Nervous",
  data: function () {
    return {
    };
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss"></style>
