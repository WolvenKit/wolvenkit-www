<template>
  <div class="w-screen sticky top-0">
    <div class="flex w-screen justify-center">
      <div class="flex w-screen xl:w-3/5">
        <div class="flex items-center w-screen">
          <div class="p-5 flex">
            <a href="/" class="text-white">
              <nuxt-img
                src="/logo.png"
                class="h-10 transition ease-in-out duration-300 hover:-translate-y-1"
              />
            </a>
          </div>
          <div class="font-poppins font-semibold flex">
            <ul class="">
              <li
                class="inline-block mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a href="/projects" class="text-white">Projects</a>
              </li>
              <li
                class="inline-block mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a href="/team" class="text-white">Team</a>
              </li>
              <li
                class="inline-block mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a href="# https://wiki.redmodding.org" class="text-white"
                  >Wiki</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-end w-screen">
          <div class="right-0">
            <ul class="flex items-center justify-center h-6">
              <li
                class="inline-block h-6 mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a
                  href="# https://www.patreon.com/RedModdingTools"
                  class="text-white"
                  ><IconPatreon
                /></a>
              </li>
              <li
                class="inline-block h-6 mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a href="# https://github.com/WolvenKit/" class="text-white"
                  ><IconGithub
                /></a>
              </li>
              <li
                class="inline-block h-6 mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a href="# https://discord.gg/Epkq79kd96" class="text-white"
                  ><IconDiscord
                /></a>
              </li>
              <li
                class="inline-block h-6 mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a
                  href="# https://www.youtube.com/channel/UCl3JpsP49JgYLMYAYQvoaLg"
                  class="text-white"
                  ><IconYoutube
                /></a>
              </li>
              <li
                class="inline-block h-6 mx-4 transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <a
                  href="# https://www.twitch.tv/cyberpunk2077modding"
                  class="text-white"
                  ><IconTwitch
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
