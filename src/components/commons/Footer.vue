<template>
  <div>
    <section class="ftco-intro-2 img" style="background-image: url(images/bg_3.jpg);">
        <div class="overlay"></div>
        <div class="container-xl">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-10">
                    <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                        <div class="col-md-8 d-flex align-items-center">
                        <div>
                        <span class="subheading">Prepare for takeoff</span>
                        <h1 class="mb-md-0 mb-4">Looking for business opportunity?</h1>
                        </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center">
                            <p class="mb-0"><a href="#" class="btn btn-white py-md-4 py-3 px-md-5 px-4">Get Started</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="ftco-footer">
        <div class="overlay"></div>
        <div class="container-xl">
            <div class="row justify-content-between">
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2 logo d-flex">
                        <a class="navbar-brand" href="index.html">
                        Ravbytes
                        </a>
                        </h2>
                        <p>We are leading professional in developing business applications, consultation and delivering pre-eminent services and values.</p>
                        <ul class="ftco-footer-social mt-4">
                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#"><span class="fa fa-instagram"></span></a></li>
                        </ul>   
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Services</h2>
                <div class="d-md-flex">
                <ul class="list-unstyled w-100">
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Creative Desgin</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Digital Marketing</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Application Design</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Web Development</a></li>
                </ul>
                <ul class="list-unstyled w-100">
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Branding</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Graphic Design</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Web Design</a></li>
                <li><a href="#"><span class="ion ion-ios-arrow-round-forward me-2"></span>Email Marketing Consulting</a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Have a Questions?</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon fa fa-map marker"></span><span class="text">{{detail.address}}</span></li>
                                <li><a :href="`tel:${detail.phone}`"><span class="icon fa fa-phone"></span><span class="text">{{detail.phone}}</span></a></li>
                                <li><a :href="`mailto:${detail.email}`" target="_blank"><span class="icon fa fa-paper-plane"></span><span class="text">{{detail.email}}</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: "Footer",
    props: ["detail"]

}
</script>

<style>

</style>