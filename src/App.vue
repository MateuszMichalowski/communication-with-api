<template>
<!--  <AxiosOption />-->
<!--  <UseFetchOption />-->
  <UseComposable />
<!--  <Suspense>-->
<!--    <template #default>-->
<!--      <SuspenseAxiosOption />-->
<!--    </template>-->
<!--    <template #fallback>-->
<!--      <h1>Loading data...</h1>-->
<!--    </template>-->
<!--  </Suspense>-->
</template>

<script>
// import AxiosOption from "@/components/AxiosOption";
// import SuspenseAxiosOption from "@/components/SuspenseAxiosOption";
// import UseFetchOption from "@/components/UseFetchOption";
import UseComposable from "@/components/UseComposable";

export default {
  name: 'App',
  components: {
    // SuspenseAxiosOption,
    UseComposable,
    // UseFetchOption,
    // AxiosOption,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
