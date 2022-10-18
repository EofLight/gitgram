<template>
    <div class="c-statistic">
        <div class="stars">
            <div class="stars__content-wrapper slot">
                <span class="slot__icon"><icon name="star" /></span> Star
            </div>
            <div class="stars__number-wrapper slot">
                <span class="slot__number">{{ starsNumber }}</span>
            </div>
        </div>
        <div class="forks">
            <div class="forks__content-wrapper slot">
                <span class="slot__icon"><icon name="fork" /></span> Fork
            </div>
            <div class="forks__number-wrapper slot">
                <span class="slot__number">{{ forksNumber }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'statistic',
  components: {
    icon
  },
  props: {
    starsNumber: {
      type: Number,
      require: true
    },
    forksNumber: {
      type: Number,
      require: true
    }
  }
}
</script>

<style scoped lang="scss" src="./statistic.scss"></style>
