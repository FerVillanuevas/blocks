<template>
  <div class="layout">
    <b-navbar
      id="animated-nav"
      toggleable="lg"
      :type="opacity == 1 ? 'dark' : 'light'"
      variant="transparent"
      fixed="top"
    >
      <div class="nav__background bg-dark" :style="`opacity: ${opacity}`"></div>

      <b-navbar-brand to="/">{{ this.$lang.msg('app') }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-for="wrapper in wrappers"
            :key="wrapper.sys.id"
            :to="{ name: 'path', params: { path: 'home' } }"
            >{{ wrapper.fields.path }}</b-nav-item
          >
          <b-nav-item-dropdown :text="lang" right>
            <b-dropdown-item v-on:click="setLang('en-US')">EN</b-dropdown-item>
            <b-dropdown-item v-on:click="setLang('es-MX')">ES</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <Nuxt />

    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">
            <!-- Content -->
            <h5 class="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none pb-3" />

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
var Cookies = require('js-cookie')

export default {
  data() {
    return {
      lang: Cookies.get('lang'),
      opacity: 0,
      wrappers: null,
    }
  },
  mounted() {
    this.animated()
  },
  methods: {
    setLang(lang) {
      Cookies.set('lang', lang)
      window.location.reload()
    },
    animated() {
      var nav = document.getElementById('animated-nav')
      var top = 400
      document.addEventListener('scroll', () => {
        if (window.pageYOffset <= top) {
          this.opacity = window.pageYOffset / top
        } else {
          this.opacity = 1
        }
      })
    },
  },
  async fetch() {
    let { data } = await this.$contentful.getEntries('wrapper', {
      'fields.path[in]': 'home',
    })
    this.wrappers = data.items
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
