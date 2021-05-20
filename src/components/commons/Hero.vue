<template>
  <section class="hero-wrap hero-wrap-2">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-12 text-center mt-5">
            <h1 class="mb-0 bread">{{title}}</h1>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "Hero",
    props: ["title"]
}
</script>

<style>

</style>