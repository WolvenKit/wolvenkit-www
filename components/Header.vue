<template>
	<div class="sm:h-28 h-40 w-full border-b border-neutral-600 text-neutral-400">
		<div class="h-full w-full flex justify-center items-center">
			<div class="h-full w-[950px] grid sm:grid-cols-[15%,auto] grid-rows-1">
				<div class="h-full w-full flex justify-center items-center">
					<nuxt-img src="logo.png" height="65px" width="65px" />
				</div>
				<div class="h-full w-full flex justify-end items-center p-4 pr-14">
					<ul class="space-x-4">
						<li class="inline-block hover:text-white"><a href="/">Home</a></li>
						<li class="inline-block hover:text-white">
							<a href="/team">Team</a>
						</li>
						<li class="inline-block hover:text-white">
							<a href="/projects">Projects</a>
						</li>
						<li class="inline-block">
							<a
								class="bg-neutral-400 hover:bg-[#df2935] hover:text-white px-3 py-1 rounded text-[#212121]"
								href="https://wiki.redmodding.org/"
								>Wiki</a
							>
						</li>
						<li class="inline-block">
							<a href="https://discord.com/invite/Epkq79kd96"
								><nuxt-img
									class="inline"
									src="discord.svg"
									height="25px"
									width="25px"
							/></a>
						</li>
						<li class="inline-block">
							<a href="https://github.com/WolvenKit/"
								><nuxt-img
									class="inline"
									src="github.svg"
									height="25px"
									width="25px"
							/></a>
						</li>
						<li class="inline-block">
							<a href="https://www.patreon.com/RedModdingTools"
								><nuxt-img
									class="inline"
									src="patreon.svg"
									height="25px"
									width="25px"
							/></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
