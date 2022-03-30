<template>
  <div class="bar-top">
    <router-link to="/" tag="button">
      <div class="dice" title="atrás"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  components: { }
}
</script>

<style lang="scss">
  .bar-top {
    background-color: rgba(0,0,0,0.89);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 90%);
    height: auto;
    left: 0;
    padding: 10px 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: 1s linear;
    width: 100%;
    z-index: 2!important;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
  } 

  .dice {
    width: 35px; height: 35px;
    margin: 10px;
    background: url("~@/assets/dice.png");
    background-size: cover;
    -webkit-animation: rotating 6s linear infinite;
    -moz-animation: rotating 6s linear infinite;
    -ms-animation: rotating 6s linear infinite;
    -o-animation: rotating 6s linear infinite;
    animation: rotating 6s linear infinite;
  }

  // keyframes
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
