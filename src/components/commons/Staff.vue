<template>
    <div class="col-md-6 col-lg-3 aos-init aos-animate" data-aos="flip-right" data-aos-delay="100" data-aos-duration="1000">
        <div class="staff">
            <div class="img-wrap d-flex align-items-stretch">
                <div class="img align-self-stretch" style="background-image: url(https://via.placeholder.com/800x957);"></div>
            </div>
            <div class="text text-center">
                <h3 class="mb-2">{{staff.name}}</h3>
                <span class="position mb-2">{{staff.position}}</span>
                <div class="faded">
                    <ul class="ftco-social text-center">
                        <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                        <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                        <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
                        <li class="ftco-animate"><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                    </ul>
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Staff",
    props: ["staff"]
}
</script>

<style>

</style>