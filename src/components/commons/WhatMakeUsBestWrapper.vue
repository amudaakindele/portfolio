<template>
  <section :class="`ftco-section ${pt ? '' :'ftco-no-pt'}`">
      <div class="container-xl mt-2">
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
    props: ["services","pt"],
    components:{
        WhatMakeUsBestService
    }
}
</script>

<style>

</style>