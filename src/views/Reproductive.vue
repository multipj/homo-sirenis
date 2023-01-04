<template>
  <Bar />
  <div class="wrap xs-1-12 md-2-11">
    <Header />
    <div class="contain">
      <h1>Aparato reproductor</h1>
      <div class="contenido setp">
        <!-- PARTE 1 -->
        <div class="parte">
          <h2 id="1-hermafroditismo">1. Hermafroditismo</h2>
          <img src="https://i.imgur.com/PgvjIaz.png" class="il" />
          <p>
            Al igual que los juveniles Pagellus bogaraveo (besugos), en los sirenos se
            presenta el hermafroditismo simultáneo, lo que significa que en ellos se da la
            presencia normal de órganos reproductivos funcionales de los dos sexos,
            masculino y femenino.
          </p>

          <p>
            A diferencia del sargo y la anguila (Que nacen con un sexo y pueden cambiarlo
            a medida que crecen) los sirenos nacen con ambos sexos y los mantiene en su
            etapa adulta. A pesar de ello, no pueden autofecundarse. En contraposición,
            las sirenas, sólo presentan el órgano reproductor femenino.
          </p>
        </div>

        <div class="parte">
          <p>
            Tanto sirenos como sirenas poseen un vulva que abre camino al cuello del
            útero. Sin embargo, mientras que el sexo femenino posee el clítoris en la zona
            superior de la vulva, los sirenos, en cambio, no, y en su lugar poseen un
            orificio por el que asoma muy mínimamente la punta el órgano masculino
            retráctil (El cual tiene parecido al clítoris, como un botóm, cuando el
            miembro viril está escondido) y el cual asoma por éste cuando se pone en
            erección, lo que, a diferencia de la erección humana, los miembros de los
            sirenos no ganan dureza debido a su forma lenguada y por su capacidad de
            contorsionarse y doblarse.
          </p>
          <img src="https://i.imgur.com/s9bbjXW.png" class="ir" />
          <p>
            Los testículos son internos, cilíndricos, ovalados y se encuentran en la parte
            inferior de la cavidad corporal (en los inmaduros son apenas una masa
            blanquecina poco definida). Se encargan de la producción no sólo de
            espermatozoides, sino también de las hormonas que se ocupan del control de
            diversos procesos corporales (entre ellos el desarrollo del miembro masculino)
            así como del ciclo reproductor.
          </p>
        </div>

        <!-- PARTE 2 -->

        <div class="parte">
          <h2 id="2-ovoviviparismo">2. Ovoviviparismo</h2>
          
          <p>
            Su reproducción es ovovivípara con fecundación interna; Más específicamente,
            los embriones se desarrollan dentro de huevos bentónicos que flotan en la
            placenta dentro del útero del sireno o sirena. La porosidad del corion
            (membrana del huevo) premite la absorción de los nutrientes que el sireno o
            sirena deposita en la placenta de su útero y pasa al vitelio de los huevos a
            través de dos capas, una primera donde se concentran los nutrientes, y una
            segunda donde se diluye con el líquido amniótico dentro del huevo. La primera
            capa está conectada a los embriones a través de un filamento umbilical del
            mismo material que la membrana transparente que forma el huevo.
          </p>
        </div>

        <div class="parte">
          <img src="https://i.imgur.com/tLqXyI9.png" class="il" />
          <p>
            Cuando el embrión absorbe suficientes nutrientes (3 meses), los huevos son
            expulsados de manera más prematura que los bebés de los humanos (De los cuales
            sólo el 20% se encuentran fecundados, mientras que el resto son huevos vacíos)
            y los pocos embriones continúan la mitad de su desarrollo fuera del vientre
            uterino que sus padres resguardan en sitios seguros.
          </p>

          <p>
            Finalmente, cuando el embrión crece y consume todo el vitelio de la primera
            capa, éstos eclosionan, entonces los embriones sufren una metamorfosis al
            entrar en contanto con el mar, y continúa su crecimiento alimentándose de la
            lactancia de las glándulas mamarias de sus padres o madres, pues los sirenos
            también disponen de mamas funcionales, pero con glándulas de menor dimensión
            que el de las sirenas.
          </p>

          <p>
            Existe un periodo (cada 4 meses) en el cual los sirenos y sirenas de dicha
            especie gestan huevos aún si no han sido fecundados, y del mismo modo estos
            son expulsados al exterior pasado un tiempo, donde, en este caso, todos los
            huevos se encuentran vacíos. El último mes en que se gestan dichos huevos
            estén o no fecundados debilita al homo sirenis, pues es el momento donde más
            se nota el hecho de que los nutrientes son repartidos.
          </p>
        </div>

        <!-- PARTE 3 -->
        <div class="parte">
          <h2 id="3-hibridaciones">3. Hibridaciones</h2>
          <p>
            Los sirenos y sirenas de la especie homo sirenis no son capaces de engendrar
            un cruce estéril con cualquier otra especie, a pesar de las similutides
            físicas aparentes.
          </p>

          <p>
            Es la diferencia de su aparato reproductor y su gestación ovovivípara la que
            hace imposible dicho resultado. Sin embargo, sucede un caso extraño en que, si
            el esperma de un humanoide terrestre fecundara los huevos de un homo sirenis,
            en ellos se gestarían una especie específica de peces, que varía según la raza
            que los fecundó. En el caso de un humano, engendraría en ellos
            <i>peces rostratus</i>.
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
  name: "Reproductive",
  data: function () {
    return {};
  },
  methods: {},
  components: { Bar, Header },
  async mounted() {},
};
</script>

<style lang="scss"></style>
