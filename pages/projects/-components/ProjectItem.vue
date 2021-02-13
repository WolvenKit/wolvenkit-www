<template>
  <div class="projectItem">
    <div class="projectItem__info" :style="'--project-color: ' + project.color">
      <p class="projectItem__name">
        {{ project.name }}
      </p>
      <nuxt-content class="projectItem__description" :document="project" />
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
      <div class="projectItem__contributors">
        <span>Contributors: </span>
        <div
          v-for="member in members"
          :key="member.name"
          v-lazy-container="{ selector: 'img' }"
          :title="member.name"
          class="projectItem__contributors__contributor"
        >
          <img :data-src="member.profileImageObj.image" :data-loading="member.profileImageObj.placeholder">
        </div>
      </div>
    </div>

    <div
      v-if="projectImage"
      v-lazy-container="{ selector: 'img' }"
      class="projectItem__imageContainer"
    >
      <img :data-src="projectImage.image" :data-loading="projectImage.placeholder">
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
    },
    members: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      projectImage: null
    }
  },

  created () {
    this.projectImage = this.getProjectImage()
    this.members.forEach(m => m.profileImageObj = this.getProfileImage(m))
  },

  methods: {
    getProjectImage () {
      if (this.project.image) {
        try {
          return {
            image: require(`~/content/${this.project.dir.substring(1)}/${this.project.image}`),
            placeholder: require(`~/content/${this.project.dir.substring(1)}/${this.project.image}?lqip&inline`)
          }
        } catch (err) {
          return null
        }
      } else {
        try {
          return {
            image: require(`~/content/${this.project.path.substring(1)}.jpg`),
            placeholder: require(`~/content/${this.project.path.substring(1)}.jpg?lqip&inline`)
          }
        } catch (err) {
          return null
        }
      }
    },

    getProfileImage (member) {
      if (member.profileImage) {
        try {
          return {
            image: require(`~/content/${member.dir.substring(1)}/${member.profileImage}`),
            placeholder: require(`~/content/${member.dir.substring(1)}/${member.profileImage}?lqip`)
          }
        } catch (err) {
          return {
            image: null,
            placeholder: null
          }
        }
      } else {
        return {
          image: null,
          placeholder: null
        }
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
  padding: 2em 0;
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
    margin-left: 2em;
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
    margin: -1em 0 0 -1em;
    width: calc(100% + 1em);
  }

  &__button {
    height: 2.5em;
    margin: 1.5em 0 0 1em;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--project-color);
    color: var(--color-text);
    padding: 0.5em 2em;
    border-radius: 0.25em;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
  }

  &__github {
    height: 100%;
    min-width: 2em;
    margin-right: 0.5em;

    ::v-deep svg {
      height: 100%;
      width: 100%;
    }
  }

  ::v-deep &__description {
    p {
      line-height: 1.6em;
      margin-bottom: 1em;
      font-size: 14px;
    }
  }

  &__contributors {
    width: 100%;
    min-height: 34px;
    margin-top: 1em;

    span {
      float: left;
      line-height: 34px;
      margin-right: 1em;
    }

    &__contributor {
      position: relative;
      float: left;
      width: 30px;
      height: 30px;
      margin: 2px;

      &:hover::after {
        content: attr(title);
        min-height: 22px;
        line-height: 22px;
        font-size: 12px;
        min-width: 40px;
        padding: 0 4px;
        background-color: var(--color-bg-alt);
        color: var(--color-text);
        position: absolute;
        top: 110%;
        left: 0;
        border: 1px solid var(--project-color);
        border-radius: 4px;
        text-align: center;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: var(--project-color);
      }
    }
  }
}
</style>
