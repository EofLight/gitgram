<template>
  <div class="c-slide" :class="{ active }">
    <div class="header">
      <div class="header__progress">
        <xProgress :active="active" @onFinish="$emit('onProgressFinish')" />
      </div>
      <div class="header__person">
        <person :userName="data.username" :avatarImgSrc="data.userAvatar" />
      </div>
    </div>
    <div class="content">
      <div class="content__loading" v-if="active && loading">
        <spinner />
      </div>
      <div class="content__info" v-else>
        <div v-if="data.content?.length" class="content__text" v-html="data.content"></div>
        <placeholder v-else :paragraphs=2 />
      </div>
    </div>
    <div class="footer">
      <xButton
        :theme="data.following.status ? 'gray' : 'green'"
        :loading="data.following.loading"
        @onClick="$emit(data.following.status ? 'onUnfollow' : 'onFollow', data.id)"
      >
        {{data.following.status ? 'Unfollow' : 'Follow'}}
      </xButton>
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { progress } from '../progress'
import { person } from '../person'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'
import { icon } from '../../icons'
import { button } from '../button'

export default {
  components: {
    xProgress: progress,
    person,
    spinner,
    xButton: button,
    placeholder,
    icon
  },
  emits: ['onNextSlide', 'onPrevSlide', 'onProgressFinish', 'onFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>
