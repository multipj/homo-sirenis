<template>
    <div class="indice">
        <ul>
            <li><router-link to="/taxonomy" tag="button">Taxonomía</router-link></li>
            <li>Anatomía y fisiología
                <ul>
                    <li><router-link to="/respiratory-system" tag="button">Aparato respiratorio</router-link></li>
                    <li><router-link to="/circulatory-system" tag="button">Aparato circulatorio</router-link></li>
                    <li><router-link to="/digestive-system" tag="button">Aparato digestivo</router-link></li>
                    <li><router-link to="/reproductive-system" tag="button">Aparato reproductor</router-link></li>
                    <li><router-link to="/musculoskeletal-system" tag="button">Aparato locomotor</router-link></li>
                    <li><router-link to="/integumentary-system" tag="button">Sistema integumentario</router-link></li>
                    <li><router-link to="/nervous-system" tag="button">Sistema nervioso</router-link></li>
                    <li><router-link to="/lymphatic-system" tag="button">Sistema linfálico-inmune</router-link></li>
                </ul>
            </li>
            <li><router-link to="/myths" tag="button">Mitos e historias</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Index',
  components: { }
}
</script>

<style lang="scss">
.indice {
    background-color: #f8f9fa;
    border: 1px solid #a2a9b1;
    width: fit-content;
    padding: 0px 20px 0px 0px;
    margin: 15px 0px;
}

.indice a:hover {
    color: #fff;
    transition: 0.15s;
    background: #8c9aa4;
    padding: 2px 5px;
    border-radius: 5px;
}

.indice a {
    transition: 0.1s ease;
    padding: 2px 5px;
}
</style>
