<template>
  <div class="nav-container">
    <div class="nav-content">
      <b-navbar id="mainNav" toggleable="md">
        <b-navbar-brand href="/" class="logo">
          <img src="/logo.svg" alt="julian brüning" width="137.5px" height="20px">
        </b-navbar-brand>
        <!-- <b-navbar-toggle target="nav_collapse">
          <i class="material-icons">menu</i>
          <i class="description">Menü</i>
        </b-navbar-toggle> -->
        <!-- <b-collapse id="nav_collapse" is-nav> -->
        <b-navbar-nav class="ml-auto mr-2">
          <b-nav-item to="/projects">
            Projekte
          </b-nav-item>
          <b-nav-item to="/cv" class="ml-2">
            CV
          </b-nav-item>
          <!-- <b-nav-item
            href="https://www.dropbox.com/s/n3hoidfz3pciww2/CV-EN-Julian_Bruening.pdf?dl=0"
            target="_blank"
          >
            <i class="material-icons">description</i>
            {{ $t('profile') }}
          </b-nav-item> -->
          <!-- <b-nav-item :to="{ name: 'articles' }">Etzolds Artikel</b-nav-item>
          <b-nav-item
            :to="{ name: 'author', params: { slug: 'dr-ruediger-etzold' } }"
          >
            Autor
          </b-nav-item> -->
        </b-navbar-nav>
        <!-- </b-collapse> -->
      </b-navbar>
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "profile": "Profile"
  },
  "de": {
    "profile": "Profil"
  }
}
</i18n>
<style>
#mainNav {
  background-color: #008856;
  box-shadow: 0 2px 5px rgba(#000, 0.15);
  color: white;
}
.navbar-collapse.show,
.navbar-collapse.collapsing {
  margin-top: -5px;
  background-color: white;
  padding-left: 48px;
  padding-right: 48px;
}
.navbar-toggler {
  height: 50px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.65);
  border: none;
}
  .navbar-toggler .material-icons {
    float: left;
  }
.navbar-toggler .description {
  font-size: 0.75em;
  font-weight: 300;
  padding-top: 6px;
  font-style: normal;
  float: left;
}
  @media (max-width: 400px) {
    .navbar-toggler .description {
      display: none;
    }
  }
.navbar-light .navbar-brand {
  color: white;
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.65);
}
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 1);
}
.show > .nav-link:after {
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
a.router-link-exact-active {
  color: yellow;
}
.material-icons {
  float: left;
  padding-right: 6px;
}
.nuxt-link-exact-active {
  background: rgba(255,255,255,0.2);
  color: white;
  border-radius: 4px;
}
</style>
