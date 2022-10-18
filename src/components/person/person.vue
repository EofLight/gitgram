<template>
    <div class="c-person">
        <a href="#" class="profile-link">
            <img :src="avatarImgSrc" alt="" class="profile-link__avatar">
        </a>
        <div class="person-info">
            <div class="person-info__username">
                {{ userName }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'person',
  props: {
    avatarImgSrc: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" src="./person.scss"></style>
