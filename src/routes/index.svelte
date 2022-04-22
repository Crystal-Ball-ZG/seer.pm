<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	import heroimg from '$lib/assets/images/3d_icons/discoball.png';
	import erasimg from '$lib/assets/images/3d_icons/3Dtriangle.png';
	import eventsimg from '$lib/assets/images/3d_icons/waveball.png';
	import progressimg from '$lib/assets/images/3d_icons/stickball.png';
	import titlesimg from '$lib/assets/images/3d_icons/roundstar.png';
	import resourcesimg from '$lib/assets/images/3d_icons/hexacubicon.png';
	
	let pages = [
		{
			name: 'Eras',
			href: 'eras',
			src: 'erasimg',
			desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
		},
		{
			name: 'Events',
			href: 'events',
			desc: 'Stay up to date where and when things happen.'
		},
		{ 
			name: 'Program Progress Report',
		  href: 'progress',
		  desc: '' 
		},
		{
			name: 'Titles',
			href: 'titles',
			desc: 'Earn your title, earn your ZTG'
		},
		{
			name: 'Resources',
			href: 'resources',
			desc: 'Here you find official zeitgeist material'
		}
	];
	let hero = {
		name: 'The Zeitgeist Seer Program',
		href: '/',
		desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
	};
</script>

<svelte:head>
	<title>{hero.name}</title>
</svelte:head>

<section class="mx-auto">
	<div class="flex flex-col p-4">
		<div
			class="bg-gradient-to-bl to-#0100FE/70 from-#C000B0/90 w-full h-118 rounded-3xl mt-4 mb-8 p-16 relative"
		>
			<div class="absolute right-0 z-1">
				<img class="w-2/3 float-right mr-10 opacity-90" src={heroimg} alt={hero.name} />
			</div>
			<div class="absolute w-2/3 z-2">
				<h2 class="text-6xl mb-4">{hero.name}</h2>
			</div>
			<p class="w-1/2 text-xl absolute bottom-40 z-2">
				{hero.desc}
			</p>
			<button class="bg-#6236FF px-10 py-4 my-5 rounded-3xl absolute bottom-16 z-2">
				<div class="i-mdi-alarm text-orange-400" />
				<a href={hero.href}>Continue</a>
			</button>
		</div>
		{#each pages as page}
			<div class="border-1 border-#6236FF w-full h-118 rounded-3xl mb-8 p-16 relative">
				<div class="absolute right-0 top-40 z-1">
					<img src={page.src} alt={page.name} />
				</div>
				<div class="w-2/3 z-2">
					<h2 class="text-6xl mb-4">{page.name}</h2>
				</div>
				<p class="w-1/2 text-xl absolute bottom-40">
					{page.desc}
				</p>
				<button class="bg-#6236FF px-4 py-2 absolute bottom-16 rounded-3xl text-3xl">
					<a href={page.href}>></a>
				</button>
			</div>
		{/each}
	</div>
</section>

<style>
</style>
