<template>
  <div>
    <Hero title="Our Service" />

    <section class="ftco-section ftco-no-pt">
      <div class="container-xl">
        <div class="row g-lg-5">
          <WhatMakeUsBestWrapper pt="true" :services="featuredServices" />
          <OtherServices :services="services" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/commons/Hero"
import WhatMakeUsBestWrapper from '@/components/commons/WhatMakeUsBestWrapper';
import OtherServices from '../components/commons/Services'
export default {
    name: "Services",
    components: {
      Hero,
      WhatMakeUsBestWrapper,
      OtherServices
    },
    props: ["services", "featuredServices"]
}
</script>

<style>

</style>