<template>
  <section class="hero-wrap">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-end align-items-stretch">
          <div class="col-md-6 col-lg-4 text d-flex align-items-center">
            <div class="desc">
              <h1 class="">We Are Digital Agency Helping To Boost Your sales</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p class="d-flex align-items-center mt-4">
                <a href="#contact-us" class="btn btn-white d-flex align-items-center py-3 px-4">Start A Project with Us</a>
              </p>
            </div>
          </div>
        <div class="col-md-8 col-lg-6 d-flex align-items-end">
          <img :src="HeroImage" class="img-fluid" alt="This Image is not showing">
        </div>
        </div>
      </div>
    </section>
</template>

<script>
 
export default {
    name: "Hero",
    data(){
        return {
            HeroImage : 'https://via.placeholder.com/2920x3840'
        }
    }
}
</script>

<style>

</style>