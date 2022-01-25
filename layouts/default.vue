<template>
    <div>
        <div class="container">
            <AppHeader />
            <nuxt/>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: ":: sample Task ::",
            meta: [
                {
                    hid:"description",
                    name:"description",
                    content:"samples"
                }
            ],
            script: [
                {
                    type: "text/javascript",
                    charset: "utf-8"
                },
                // { src:"/vendor/aos/aos.js", body:true},
                { src:"/vendor/bootstrap/js/bootstrap.bundle.min.js", body:true},
                // { src:"/vendor/glightbox/js/glightbox.min.js", body:true},
                // { src:"/vendor/swiper/swiper-bundle.min.js", body:true},
                // { src:"/js/main.js", body:true},
                { src:"/js/jquery.min.js", body:true},
                // { src: "/js/wizard.js", body:true}
            ],
             __dangerouslyDisableSanitizers: ["script"],
            link:[
                // { href:"/img/favicon.png" ,rel:"icon"},
                // { href:"/vendor/aos/aos.css" ,rel:"stylesheet"},
                { href:"/vendor/bootstrap/css/bootstrap.min.css" ,rel:"stylesheet"},
                { href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css" ,rel:"stylesheet"},
                // { href:"/vendor/boxicons/css/boxicons.min.css" ,rel:"stylesheet"},
                // { href:"/vendor/glightbox/css/glightbox.min.css" ,rel:"stylesheet"},
                // { href:"/vendor/swiper/swiper-bundle.min.css" ,rel:"stylesheet"},
                // { href:"/css/style.css" ,rel:"stylesheet"}
            ]
        }
    },
}
</script>

<style>

</style>