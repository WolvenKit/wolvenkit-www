<template>
	<div class="h-full w-full mb-28">
		<div class="w-full flex justify-center p-14">
			<h1 class="md:text-6xl text-4xl font-bold">RED Modding Tools</h1>
		</div>
		<div class="h-full grid 2xl:grid-cols-2 2xl:space-y-0 grid-cols-1 space-y-20 grid-rows-1 p-5">
			<div class="h-full flex justify-center items-top rounded">
				<div>
					<nuxt-img class="rounded-lg z-0" src="wkit.webp" width="720px" />
					<div
						class="relative z-10 md:-mt-36 md:h-36 -mt-24 h-24 bg-[#df2935]/30 backdrop-blur rounded-b-lg">
						<div class="w-full h-full flex items-center p-5 md:p-10">
							<div class="w-full h-full grid grid-cols-[80%,20%] grid-rows-1">
								<div class="md:space-y-3 space-y-1">
									<div class="md:text-4xl text-lg font-bold">WolvenKit</div>
									<div class="md:text-base text-xs text-neutral-400">
										Mod editor/creator for RED Engine games.
									</div>
								</div>
								<div
									class="w-full h-full flex justify-end items-center space-x-6">
									<a
										class="inline-block"
										href="https://www.nexusmods.com/cyberpunk2077/mods/2201">
										<nuxt-img
											class="rounded-lg z-0"
											src="nexus-mods.png"
											width="30px" />
									</a>
									<a
										class="inline-block"
										href="https://github.com/WolvenKit/WolvenKit/releases/latest">
										<nuxt-img
											class="rounded-lg z-0"
											src="github.svg"
											width="30px" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="h-full flex justify-center items-top rounded">
				<div>
					<nuxt-img class="rounded-lg z-0" src="cet.png" width="720px" />
					<div
						class="relative z-10 md:-mt-36 md:h-36 -mt-24 h-24 bg-[#df2935]/30 backdrop-blur rounded-b-lg">
						<div class="w-full h-full flex items-center p-5 md:p-10">
							<div class="w-full h-full grid grid-cols-[80%,20%] grid-rows-1">
								<div class="md:space-y-3 space-y-1">
									<div class="md:text-4xl text-lg font-bold">Cyber Engine Tweaks</div>
									<div class="md:text-base text-xs text-neutral-400 w-22">
										Performance boost, bug fixes and hacks for fun for Cyberpunk
										2077.
									</div>
								</div>
								<div
									class="w-full h-full flex justify-end items-center space-x-6">
									<a
										class="inline-block"
										href="https://www.nexusmods.com/cyberpunk2077/mods/107">
										<nuxt-img
											class="rounded-lg z-0"
											src="nexus-mods.png"
											width="30px" />
									</a>
									<a
										class="inline-block"
										href="https://github.com/maximegmd/CyberEngineTweaks/releases/latest">
										<nuxt-img
											class="rounded-lg z-0"
											src="github.svg"
											width="30px" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
