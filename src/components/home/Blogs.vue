<template>
  <section class="ftco-section">
      <div class="container-xl">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-7 heading-section text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            <span class="subheading">Our Blog</span>
            <h2>Recent From Blog</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <Blog :key="blog.id" v-for="blog in blogs" :blog="blog" />
        </div>
      </div>
    </section>
</template>

<script>
import Blog from '../commons/Blog'
export default {
    name:"Blogs",
    props: ["blogs"],
    components:{
      Blog
    }
}
</script>

<style>

</style>