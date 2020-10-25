<template>
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
          Creative Tim
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li :class="[currentPage.includes('dashboard') ? activeClass : '', 'nav-item']">
            <router-link class="nav-link" to="/dashboard">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li :class="[currentPage.includes('articles') ? activeClass : '', 'nav-item']">
            <router-link class="nav-link" to="/articles">
              <i class="material-icons">dashboard</i>
              <p>Articles</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    computed: {
        currentPage(){
            return this.$route.path;
        }
    },
    data() {
        return {
            activeClass: 'active',
        }
    },
}
</script>