<template>
    <div class="col-md-6 col-lg-4 d-flex">
        <div class="blog-entry justify-content-end aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <router-link :to="blog.url" class="block-20 img" style="background-image: url('https://via.placeholder.com/1000x667');"></router-link>
            <div class="text">
                <p class="meta"><span><i class="fa fa-user me-1"></i>{{blog.author}}</span> <span><i class="fa fa-calendar me-1"></i>{{blog.posted_on}}</span> <span><a href="#"><i class="fa fa-comment me-1"></i> {{blog.comments}} Comments</a></span></p>
                <h3 class="heading mb-3"><a href="#">{{blog.title}}</a></h3>
                <p>{{blog.desc}}</p>
                <router-link :to="blog.url" class="btn btn-primary">Read More</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Blog",
    props: ["blog"]
}
</script>

<style>

</style>