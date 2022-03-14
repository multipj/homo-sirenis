<template>
  <header>homo &nbsp;&nbsp;&nbsp; sirenis</header>
</template>

<script>
export default {
  name: 'Header',
  components: { }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Pistilli";
    src: url("@/assets/Pistilli.ttf");
  }

  header {
    background-image: url('@/assets/header.gif');
    background-size: cover;
    background-repeat: no-repeat;
    width: auto;
    height: 2.5em;
    color: #fff;

    font-family: "Pistilli";
    padding-top: 100px;
    font-size: 5em;
    font-weight: 500;
    letter-spacing: -10px;
    text-shadow: 0px 0px 10px #000;
    line-height: 1em;
    text-align: center;
    margin: auto;
    word-break: break-word;
    //padding: 0;
  }
</style>
