<template>
  <section class="ftco-section bg-quarternary">
      <div class="container">
        <div class="row justify-content-center pb-4">
          <div class="col-lg-7 text-center heading-section heading-section-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <span class="subheading">Our Team</span>
            <h2 class="mb-5">Meet Our Team</h2>
          </div>
        </div>
        <div class="row g-1 g-xl-3">
          <Staff v-for="staff in staffs" :key="staff.id" :staff="staff" />
        </div>
      </div>
    </section>
</template>

<script>
import Staff from './Staff'
export default {
    name: "Teams",
    data(){
       return{
        staffs: [
            {
                id: 1,
                name: "Staff Name",
                position: "Staff Position"
            },
            {
                id: 1,
                name: "Staff Name",
                position: "Staff Position"
            },
            {
                id: 1,
                name: "Staff Name",
                position: "Staff Position"
            },
            {
                id: 1,
                name: "Staff Name",
                position: "Staff Position"
            }
        ]
       } 
    },
    components:{
        Staff
    }
}
</script>

<style>

</style>