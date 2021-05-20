<template>
  <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 heading-section text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <span class="subheading">Services</span>
          <h2 class="mb-4">Our Exclusive Services</h2>
          </div>
        </div>
        <div class="row justify-content-center g-2">
          <Service v-for="service in services" :key="service.id" :service="service"/>
        </div>
      </div>
    </section>
</template>

<script>
import Service from './Service'
export default {
    name: 'Services',
    props: ["services"],
    components:{
        Service
    }
}
</script>

<style>

</style>