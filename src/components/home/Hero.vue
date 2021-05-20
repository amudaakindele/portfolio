<template>
  <section class="hero-wrap">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-end align-items-stretch">
          <div class="col-md-6 col-lg-4 text d-flex align-items-center">
            <div class="desc">
              <h1 class="">We Are IT Company Helping To Bring Your Ideas To Reality.</h1>
              <p>We believe that every customer deserve the best, so we focus on making sure our solutions are secure, easy to use, and efficient to meet our clients needs.</p>
              <p class="d-flex align-items-center mt-4">
                <router-link to="contact" class="btn btn-white d-flex align-items-center py-3 px-4">Start A Project with Us</router-link>
              </p>
            </div>
          </div>
        <div class="col-md-8 col-lg-6 d-none d-md-flex align-items-end">
          <img :src="HeroImage" class="img-fluid" alt="This Image is not showing">
        </div>
        </div>
      </div>
    </section>
</template>

<script>
import HeroImage from '../../assets/images/b_image.png';
export default {
    name: "Hero",
    data(){
      return {
        HeroImage
      }
    }
}
</script>

<style>

</style>