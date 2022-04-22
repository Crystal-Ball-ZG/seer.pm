<script>
	import { fade } from 'svelte/transition';

	let showMobileMenu = false;

	let navItems = [
		{ name: 'Eras', href: 'eras' },
		{ name: 'Events', href: 'events' },
		{ name: 'Program Progress Report', href: 'progress' },
		{ name: 'Titles', href: 'titles' },
		{ name: 'Resources', href: 'resources' }
	];
</script>

<div class="flex flex-wrap w-full border-b-1 md:border-0 border-white">
	<div class="flex w-full p-2 lg:p-4">
		<div class="flex flex-row sm:w-1/2 lg:w-35/100 w-35/100 items-center">
			<div class="mr-4">
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.93326 5.83119C13.4358 2.05502 19.1271 -0.0100807 25.0035 4.62543e-05C30.8801 -0.0112695 36.5717 2.05398 41.0736 5.83119H8.93326ZM40.9562 44.2725C36.4694 47.9839 30.8263 50.0099 25.0035 50C19.1828 50.0095 13.542 47.9834 9.05762 44.2725H40.9562ZM36.9352 12.6918H46.8012C45.9903 11.2584 45.0391 9.90918 43.9616 8.66386H6.04532C4.4674 10.4896 3.15978 12.5325 2.1625 14.7299H35.4843L36.9352 12.6918ZM1.11234 32.5342C0.493069 30.5658 0.119457 28.5283 0 26.4682L50 26.4613C49.9235 27.8078 49.7364 29.1458 49.4404 30.4616H23.9188L22.4471 32.5342H1.11234ZM6.13514 41.4537H16.0495L17.5003 39.381H45.4746C46.3705 38.1125 47.1475 36.7641 47.796 35.3531H2.21086C3.21821 37.5651 4.53996 39.6198 6.13514 41.4537ZM49.8135 21.6112H30.3164L28.8863 23.6355H0C0.109215 21.5809 0.47358 19.5479 1.0847 17.5833H48.9222C49.3296 18.8991 49.6277 20.2463 49.8135 21.6112Z"
						fill="#6236FF"
					/>
				</svg>
			</div>
			<h1 class="text-lg xl:text-xl font-600 hidden sm:block lg:hidden xl:block">The Zeitgeist Seer Program</h1>
			<h1 class="text-lg xl:text-xl font-600 block sm:hidden lg:block xl:hidden">seer.pm</h1>
		</div>
		<nav class="flex w-65/100 sm:w-1/2 lg:w-65/100 relative justify-end">
			<ul class="hidden lg:flex flex-row font-bold list-none items-center">
				{#each navItems as page}
					<li class="md:mx-2 xl:mx-4">
						<a href={page.href}>
							{page.name}
						</a>
					</li>
				{/each}
			</ul>
			<ul class="flex flex-row">
				<li>
					<a alt="search" href="/">
						<div class="i-ant-design-search-outlined text-4xl sm:text-5xl text-#6236FF hover:text-white"></div>
					</a>
				</li>		
				<li class="ml-2">
					<div on:click={()=> showMobileMenu = !showMobileMenu}  class="lg:hidden">
						<div class="i-gg-menu-hotdog text-4xl sm:text-5xl text-white hover:text-#6236FF"></div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
			<ul hidden={!showMobileMenu} class="w-full lg:hidden">
			{#each navItems as page}
				<li class="p-2 w-full hover:bg-white hover:text-black">
					<a href={page.href}>
						{page.name}
					</a>
				</li>
			{/each}
		</ul>
</div>
