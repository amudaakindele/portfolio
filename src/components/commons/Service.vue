<template>
    <div class="col-md-6 col-lg-3 text-center d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div class="flow-wrap">
            <div class="icon">
                <span class="flaticon-creative-design"></span>
            </div>
            <div class="text">
                <h2>{{service.name}}</h2>
                <p class="mb-4">{{service.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Service",
    props: ["service"]
}
</script>

<style>

</style>