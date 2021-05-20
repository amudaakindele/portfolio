<template>
    <b-navbar toggleable="lg" type="dark" class="ftco-navbar-light">
        <div class="container">
            <b-navbar-brand to="/">
                <img src="../../assets/images/logo.png" class="site-logo img-fluid" alt="Ravbytes">
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse" class="mr-3">
                <template #default="{expanded}">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                    <span class="m-2" >Menu</span> 
                </template>
                
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse"  is-nav>
                <b-navbar-nav  class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About Us</b-nav-item>
                    <b-nav-item to="/services">Services</b-nav-item>
                    <!-- <b-nav-item to="/products">Products</b-nav-item> -->
                    <b-nav-item to="/contact">Contact</b-nav-item>
                    <!-- <b-nav-item to="/blog">Blogs</b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
export default {
    name: "Header",

}
</script>
<style lang="css" scoped>
.nav-link.router-link-exact-active.router-link-active{
    color: rgb(255, 255, 255);
    font-weight: 600;
}
@media screen and (max-width: 992px){
    .nav-link.router-link-exact-active.router-link-active{
        color: rgb(0, 0, 0);
        font-weight: 600;
    }
}
</style>