<template>
  <div class="projectItem">
    <div class="projectItem__info">
      <p class="projectItem__name">
        {{ project.name }}
      </p>
      <nuxt-content
        class="projectItem__description"
        :document="project"
      />
      <div class="projectItem__buttons">
        <a
          v-if="project.getStarted"
          :href="project.getStarted"
          class="projectItem__button projectItem__getStarted"
        >
          Get Started
        </a>
        <a
          v-if="project.download"
          :href="project.download"
          class="projectItem__button projectItem__download"
        >
          Download
        </a>
        <a
          v-if="project.link"
          :href="project.link"
          class="projectItem__button projectItem__contribute"
        >
          <GithubIcon class="projectItem__github" />
          Contribute
        </a>
      </div>
    </div>

    <div
      v-if="projectImage"
      v-lazy-container="{ selector: 'img' }"
      class="projectItem__imageContainer"
    >
      <img
        :data-src="projectImage.image"
        :data-loading="projectImage.placeholder"
      >
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'

export default {
  components: {
    GithubIcon
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      projectImage: null
    }
  },

  created () {
    this.projectImage = this.getProjectImage()
  },

  methods: {
    getProjectImage () {
      try {
        return {
          image: require(`~/content/${this.project.path.substring(1)}.png`),
          placeholder: require(`~/content/${this.project.path.substring(1)}.png?lqip&inline`)
        }
      } catch (err) {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.projectItem {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  border-bottom: 2px solid var(--color-bg-alt);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
    margin-bottom: 2em;
  }

  &__imageContainer,
  &__imageContainerNone {
    max-width: 35vmin;
    min-width: 250px;
    margin-right: 2em;
    border-radius: 0.5em;
    overflow: hidden;
    border: 5px solid var(--color-bg-alt);
    box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 720px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // filter: blur(25px);
      // transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1);
        filter: none;
      }
    }
  }

  &__info {
    width: 100%;
  }

  &__name {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.25em;
    margin-right: 0.5em;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
  }

  &__button {
    display: flex;
    align-items: center;
    background: var(--color-primary);
    color: var(--color-text);
    padding: 0.5em 2em;
    margin-bottom: 1em;
    border-radius: 0.25em;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;

    &:not(:last-of-type) {
      margin-right: 1em;
    }
  }

  &__github {
    margin-right: 0.5em;
  }

  ::v-deep &__description {
    p {
      line-height: 1.6em;
      margin-bottom: 1em;
    }
  }
}
</style>
