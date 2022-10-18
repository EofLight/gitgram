<template>
    <div class="c-repository">
        <h2 class="repository-title">{{ title }}</h2>
        <div class="repository-description">{{ description }}</div>
        <statistic class="statistic" :starsNumber="starsCount"  :forksNumber="forksCount" />
    </div>
</template>

<script>
import { statistic } from '../statistic'

export default {
  name: 'repository',
  components: {
    statistic
  },
  props: {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    starsCount: {
      type: Number,
      require: true
    },
    forksCount: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss" src="./repository.scss"></style>
