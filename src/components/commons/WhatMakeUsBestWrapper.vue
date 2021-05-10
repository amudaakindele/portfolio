<template>
  <section class="ftco-section ftco-no-pt">
      <div class="container-xl">
        <div class="row g-2 wrap" >
          <WhatMakeUsBestService :key="service.id" v-for="service in services" :service="service"/>
        </div>
      </div>
    </section>
</template>

<script>
import WhatMakeUsBestService from './WhatMakeUsBestService'
export default {
    name: "WhatMakeUsBestWrapper",
    props: ["services"],
    components:{
        WhatMakeUsBestService
    }
}
</script>

<style>

</style>