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
        <b-navbar-nav>
          <b-nav-item to="/">{{ this.$lang.msg('home') }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              :placeholder="this.$lang.msg('search')"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">{{
              this.$lang.msg('search')
            }}</b-button>
          </b-nav-form>

          <b-nav-item-dropdown :text="lang" right>
            <b-dropdown-item v-on:click="setLang('en-US')">EN</b-dropdown-item>
            <b-dropdown-item v-on:click="setLang('es-MX')">ES</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <Nuxt />
  </div>
</template>

<script>
var Cookies = require('js-cookie')

export default {
  data() {
    return {
      lang: Cookies.get('lang'),
      opacity: 0,
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
