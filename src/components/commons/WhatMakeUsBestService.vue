<template>
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch services-wrap">
        <div class="services">
            <div class="icon"><span class="flaticon-bar-chart"></span></div>
            <div class="text">
                <h2>{{service.title}}</h2>
                <p class="mb-0">{{service.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'WhatMakeUsBestService',
    props:["service"]
}
</script>

<style>

</style>