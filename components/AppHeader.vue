<template>
  <header class="app-header">
    <div class="app-header-container">
      <h1>
        <app-nuxt-link to="/">Pills</app-nuxt-link>
      </h1>
      <app-nav>
        <app-nav-link to="/login">
          {{ $t('default.login') }}
        </app-nav-link>
        <app-nav-link to="https://www.patreon.com/_pills" :external="true">
          Patreon
        </app-nav-link>
        <app-nav-link to="/about">
          {{ $t('default.about') }}
        </app-nav-link>
        <app-nav-dropdown :label="$t('default.language')">
          <app-nav-dropdown-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
            {{ $t('default.spanish') }}
          </app-nav-dropdown-link>
          <app-nav-dropdown-link :to="`/en` + $route.fullPath.replace('/en/', '')">
            {{ $t('default.english') }}
          </app-nav-dropdown-link>
        </app-nav-dropdown>
      </app-nav>
    <app-nav-button />
    </div>
  </header>
</template>

<script>
import AppNav from '~/components/AppNav';
import AppNavLink from '~/components/AppNavLink';
import AppNavDropdown from '~/components/AppNavDropdown';
import AppNavDropdownLink from '~/components/AppNavDropdownLink';
import AppNavButton from '~/components/AppNavButton';
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'app-header',
  components: {
    AppNav,
    AppNavLink,
    AppNavDropdown,
    AppNavDropdownLink,
    AppNavButton,
    AppNuxtLink
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";
@import "../assets/scss/_breakpoints";
@import "../assets/scss/_extends";

.app-header {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
}

.app-header-container {
  @extend .container;

  background: $color-basic-ligth;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    margin: 0;

    a {
      color: #222;
      text-decoration: none;
    }
  }
}
</style>



