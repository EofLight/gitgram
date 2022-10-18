<template>
    <div class="c-menu">
        <router-link class="home-icon" to="/">
            <icon name="home" />
        </router-link>
        <router-link class="profile-icon" to="#">
            <img src="../../img/1.png" alt="Profile" class="profile-icon__image">
        </router-link>
        <a class="signOut-icon" href="#">
            <icon name="signOut" />
        </a>

    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'menu',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./menu.scss" ></style>
