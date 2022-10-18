<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo/>
        <BaseMenu/>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in getTrendings" :key="story.id">
            <story-user-item
              :avatar="story.owner.avatar_url"
              :username="story.owner.login"
              @onPress="$router.push({name: 'stories', query: {initialSlide: story.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="page-content">
    <ul class="feeds">
      <li class="feeds__item">
        <feed class="feed"  v-for="item in getTrendings" :key="item.id"
          :username="item.owner.login"
          :avatarImgSrc="item.owner.avatar_url"
          :publicDate="item.updated_at">
            <repository
              :title="item.name"
              :description="item.description"
              :starsCount="item.stargazers_count"
              :forksCount="item.forks"
            />
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { menu } from '../../components/menu'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { repository } from '../../components/repository'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    BaseMenu: menu,
    storyUserItem,
    feed,
    repository
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      trendings: state => state.data
    }),
    ...mapGetters(['getTrendings'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    })
  },
  async created () {
    try {
      await this.fetchTrendings()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
