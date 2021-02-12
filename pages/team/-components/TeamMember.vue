<template>
  <div class="teamMember">
    <div
      v-if="profileImage"
      v-lazy-container="{ selector: 'img' }"
      class="teamMember__imageContainer"
    >
      <img
        :data-src="profileImage.image"
        :data-loading="profileImage.placeholder"
      >
    </div>
    <div
      v-else
      class="teamMember__imageContainerNone"
    >
      <div
        class="teamMember__color"
        :style="{ background: member.color ? `rgb(${member.color})` : null }"
      />
    </div>

    <div class="teamMember__info">
      <div class="teamMember__personalInfo">
        <p class="teamMember__name">
          {{ member.name }}
        </p>
        <ul
          v-if="member.socials"
          class="teamMember__socials"
        >
          <li
            v-for="(link, social) in member.socials[0]"
            :key="social"
            class="teamMember__socialIcon"
          >
            <CountryFlag v-if="social === 'flag'" :country="link" size="small" class="teamMember__socialIcon__flag" />
            <a v-else :href="link">
              <GithubIcon v-if="social === 'github'" />
              <TwitterIcon v-else-if="social === 'twitter'" />
              <RedditIcon v-else-if="social === 'reddit'" />
              <WebIcon v-else-if="social === 'website'" />
              <OtherIcon v-else />
            </a>
          </li>
        </ul>
      </div>
      <ul class="teamMember__projects">
        <li
          v-for="project in member.projects"
          :key="project"
          class="teamMember__project"
        >
          {{ project }}
        </li>
      </ul>
      <p class="teamMember__description">
        {{ member.description }}
      </p>
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import RedditIcon from 'vue-material-design-icons/Reddit.vue'
import WebIcon from 'vue-material-design-icons/Web.vue'
import OtherIcon from 'vue-material-design-icons/OpenInNew.vue'
import CountryFlag from 'vue-country-flag'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    RedditIcon,
    WebIcon,
    OtherIcon,
    CountryFlag
  },

  props: {
    member: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      profileImage: null,
      defaultProfileImage: 'image.png'
    }
  },

  created () {
    this.profileImage = this.getProfileImage()
  },

  methods: {
    getProfileImage () {
      if (this.member.profileImage && this.member.profileImage !== this.defaultProfileImage) {
        try {
          return {
            image: require(`~/content/${this.member.dir.substring(1)}/${this.member.profileImage}`),
            placeholder: require(`~/content/${this.member.dir.substring(1)}/${this.member.profileImage}?lqip`)
          }
        } catch (err) {
          return this.getDefaultProfileImage()
        }
      } else {
        return this.getDefaultProfileImage()
      }
    },
    getDefaultProfileImage () {
      try {
        return {
          image: require(`~/content/teamImages/${this.defaultProfileImage}`),
          placeholder: require(`~/content/teamImages/${this.defaultProfileImage}?lqip`)
        }
      } catch (err) {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.teamMember {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  width: 45%;
  min-width: 400px;

  &__imageContainer,
  &__imageContainerNone {
    width: 7em;
    min-width: 7em;
    height: 7em;
    margin-right: 2em;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid var(--color-bg-alt);
    box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(25px);
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1);
        filter: none;
      }
    }
  }

  &__color {
    width: 100%;
    height: 100%;
    background: var(--color-primary);
  }

  &__info {
    width: 100%;

    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      margin-top: 1em;
      background: linear-gradient(to right, var(--color-primary), transparent);
    }
  }

  &__personalInfo {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.25em;
    margin-right: 0.5em;
  }

  &__socials {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  &__socialIcon {
    display: inline-block;
    margin-right: 0.5em;
    transition: all 0.2s ease;

    > a {
      color: inherit;
    }

    &:hover {
      color: var(--color-primary-light);
    }

    &__flag {
      margin: -11px -18.5px !important;
      transform: scale(0.35) !important;
    }
  }

  &__projects {
    list-style: none;
    padding: 0;
    margin-bottom: 1em;
  }

  &__project {
    display: inline-block;
    margin-right: 0.5em;
    color: var(--color-text-dark);
    padding: 0.3em 0.5em;
    border-radius: 0.5em;
    font-size: 0.9em;
    background: var(--color-bg-alt);
  }
}
</style>
