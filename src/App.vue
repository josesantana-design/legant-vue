<template>

    <div class="container-fluid">
      <div class="row">
        <section class="legant">
          <header class="legant_top">
            <div class="container">
              <div class="row">
                <div class="legant_navbar">
                  <div class="legant_navbar_brand">

                    <img src="./assets/img/logo_2.png">

                    <nav class="menu-opener">
                      <div class="menu-opener-inner"></div>
                    </nav>

                  </div>
                  <ul class="legant_navbar_nav">
                    <li class="legant_navbar_nav_list">
                      <a href="#">Inicio</a>
                    </li>
                    <li class="legant_navbar_nav_list">
                      <a href="#">Inicio</a>
                    </li>
                    <li class="legant_navbar_nav_list">
                      <a href="#">Inicio</a>
                    </li>
                    <li class="legant_navbar_nav_list">
                      <a href="#">Inicio</a>
                    </li>
                    <li class="legant_navbar_nav_list">
                      <a href="#">Inicio</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div class="legant_brand-center">
            <img src="./assets/img/logo.png">


            <div class="legant_top-scroll">
              <i class="fa fa-angle-down"></i>
            </div>

          </div>
        </section>
      </div>
    </div>

</template>

<script>
import persona from './components/persona/Persona.vue'
export default {
  name: 'app',
  components: {persona},
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./app.scss"></style>
