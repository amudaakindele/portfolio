<template>
  <div>

    <Hero />

    <WhatMakeUsBestWrapper :services="featuredServices" />

    <!-- About Us -->
    <AboutUs />

    <!-- Services -->
    <Services :services="services" />

    <section class="ftco-gallery ftco-no-pb ftco-section">
      <div class="container">
        <div class="row mb-5 justify-content-between">
          <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <blockquote class="blockquote">
              <p>"Marketers need to build digital relationships and reputation before closing a sale"</p>
            </blockquote>
            <p><router-link to="contact" class="btn btn-quarternary btn-outline-quarternary py-3 px-4">Request A Quote</router-link></p>
          </div>
          <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <div class="progress-wrap">
              <h3>Design &amp; Development</h3>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div class="progress-wrap">
              <h3>Branding</h3>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:85%">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div class="progress-wrap">
              <h3>Marketing</h3>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <Teams /> -->
    <!-- <Blogs :blogs="blogs" /> -->
    

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/home/Hero';
import WhatMakeUsBestWrapper from '@/components/commons/WhatMakeUsBestWrapper';
import Services from '@/components/commons/Services';
import Teams from '@/components/commons/Teams';
import Blogs from '@/components/home/Blogs';
import AboutUs from '@/components/commons/AboutUs';

export default {
  name: 'Home',
  components: {
    Hero,
    WhatMakeUsBestWrapper,
    Services,
    Teams,
    Blogs,
    AboutUs
  },
  props: ["details","services", "featuredServices"]
}
</script>