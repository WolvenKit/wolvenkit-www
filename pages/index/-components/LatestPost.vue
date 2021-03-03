<template>
  <div class="latestPost">
    <div class="latestPost__background">
      <img :src="thumbnailImage">
    </div>
    <PageContainer>
      <h2 class="latestPost__header">
        {{ $t('index.latestPost') }}
      </h2>
      <PostItem :post="latestPost" />
    </PageContainer>
  </div>
</template>

<script>
import PostItem from '@/pages/blog/-components/PostItem'

export default {
  components: {
    PostItem
  },

  props: {
    latestPost: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      thumbnailImage: null
    }
  },

  created () {
    this.thumbnailImage = this.getThumbnailImage()
  },

  methods: {
    getThumbnailImage () {
      if (this.latestPost.thumbnailImage) {
        try {
          return require(`~/content/${this.latestPost.dir.substring(1)}/${this.latestPost.thumbnailImage}?lqip`)
        } catch (err) {
          return null
        }
      } else {
        try {
          return require(`~/content/${this.latestPost.dir.substring(1)}/thumbnail.jpg?lqip`)
        } catch (err) {
          return null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.latestPost {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, #000, transparent);
    z-index: -1;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
      filter: blur(8px);
      transform: scale(1.05);
      opacity: 0.3;
    }
  }

  ::v-deep .container {
    padding: 6vmin 4vmin;
  }

  ::v-deep .blogPostItem {
    padding: 0;
  }

  &__header {
    margin-bottom: 0.5em;
    // padding-left: 0.5em;
    font-size: 3em;
    // border-left: 0.25em solid var(--color-primary);
  }
}
</style>
