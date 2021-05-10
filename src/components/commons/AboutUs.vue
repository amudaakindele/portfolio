<template>
  <section class="ftco-section ftco-no-pt">
      <div class="container-xl">
        <div class="row g-lg-5">
          <div class="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div class="img about-img w-100" style="background-image: url(https://via.placeholder.com/1000x667);">
            </div>
          </div>
          <div class="col-lg-6 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="mt-0">
              <span class="subheading">About Us</span>
              <h2 class="mb-4">We Design, Build Brands &amp; Digital Projects</h2>
              <p>We are leading professional in developing business applications, consultation and delivering pre-eminent services and values.</p>
              <p>We specialise in Website Design and Development, App Development and Maintenance, 
                  Content Creation, Social Media Management, Video Production and Editing. </p>
              <p>We also train on web design, graphics, video editing.</p>
              
              <p class="mt-4" v-if="showBtn"><router-link to="/about" class="btn btn-primary py-3 px-4">Learn More</router-link></p>
            </div>
          </div>
        </div>
        <div class="mt-5" v-if="mores">
          <div class="row justify-content-center">
            <div class="col-lg-5 heading-section text-center mb-2">
              <span class="subheading">About Us</span>
              <h2 class="mb-4">Our Mission</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <p v-for="more in mores" :key="more.id">{{more.text}}</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "AboutUs",
    props:["mores","showBtn"]
}
</script>

<style>

</style>