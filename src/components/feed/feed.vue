<template>
    <div class="c-feed">
        <person class="person" :avatarImgSrc="avatarImgSrc" :userName="username" />
        <slot />
        <toggler class="toggler" @onToggle='toggle' />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 2" :key="n">
                    <comment text="Some text" username="Jhon Doe" />
                </li>
            </ul>
        </div>
        <div class="feed-date">{{ convertedDate }}</div>
    </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { person } from '../person'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    person
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatarImgSrc: {
      type: String,
      required: true
    },
    publicDate: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      shown: false
    }
  },
  computed: {
    convertedDate: function () {
      const localDate = new Date(this.publicDate)
      const resultDate = localDate.toLocaleString('en-US', { month: 'long', day: 'numeric' })

      return resultDate
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  mounted () {}
}
</script>

<style scoped lang="scss" src="./feed.scss"></style>
