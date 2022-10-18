<template>
    <div class="c-logo">
        <div class="logoIcon">
            <icon name="logo" />
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'logo',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./logo.scss"></style>
