<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	import heroimg from '$lib/assets/images/3d_icons/discoball.png';
	import erasimg from '$lib/assets/images/3d_icons/3Dtriangle.png';
	import eventsimg from '$lib/assets/images/3d_icons/waveball.png';
	import progressimg from '$lib/assets/images/3d_icons/ballsticks.png';
	import titlesimg from '$lib/assets/images/3d_icons/roundstar.png';
	import resourcesimg from '$lib/assets/images/3d_icons/hexacubicon.png';
	
	let pages = [
		{
			name: 'Eras',
			href: 'eras',
			img: erasimg, 
			desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
		},
		{
			name: 'Events',
			href: 'events',
			img: eventsimg,
			desc: 'Stay up to date where and when things happen.'
		},
		{ 
			name: 'Program Progress Report',
		  href: 'progress',
			img: progressimg,
		  desc: '' 
		},
		{
			name: 'Titles',
			href: 'titles',
			img: titlesimg,
			desc: 'Earn your title, earn your ZTG'
		},
		{
			name: 'Resources',
			href: 'resources',
			img: resourcesimg,
			desc: 'Here you find official zeitgeist material'
		}
	];
	let hero = {
		name: 'The Zeitgeist Seer Program',
		img: heroimg,
		href: 'welcome',
		desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
	};
</script>

<svelte:head>
	<title>{hero.name}</title>
</svelte:head>

<section class="mx-auto">
	<div class="flex flex-col p-1 md:p-2">
		<div
			class="bg-gradient-to-bl to-#0100FE/90 from-#C000B0/95 w-full h-100 md:h-118 rounded-3xl mt-4 mb-8 p-8 md:p-12 relative"
		>
			<div class="absolute right-0 z-1">
				<img class="w-55/100 mt-10 sm:mt-0 md:w-2/3 float-right sm:mr-5 lg:mr-10 opacity-85 md:opacity-95" src={hero.img} alt={hero.name} />
			</div>
			<div class="absolute z-2 w-60/100">
				<h2 class="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">{hero.name}</h2>
			</div>
			<p class="font-lato absolute w-1/2 text-lg md:text-xl bottom-32 md:bottom-40 z-2">
				{hero.desc}
			</p>
			<button class="font-grotesk bg-#6236FF/80 hover:bg-#6236FF pr-6 pl-4 md:pl-6 md:pr-10 py-3 md:py-4 md:my-5 rounded-3xl absolute bottom-8 md:bottom-12 z-2">
				<div class="text-white md:text-2xl text-xl i-mdi-arrow mr-2"/>
				<a href={hero.href} class="text-md md:text-lg">Continue</a>
			</button>
		</div>
		{#each pages as page}
			<div class="border-1 border-#6236FF w-full h-100 md:h-118 rounded-3xl mb-8 p-10 md:p-12 relative">
				<div class="absolute right-0 z-1">
					<img class="w-55/100 mt-10 sm:mt-0 md:w-2/3 float-right sm:mr-5 lg:mr-10 opacity-85 md:opacity-95" src={page.img} alt={page.name} />
				</div>
				<div class="absolute z-2 w-60/100">
					<h2 class="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">{page.name}</h2>
				</div>
				<p class="font-lato absolute w-35/100 md:w-1/2 text-lg md:text-xl bottom-32 md:bottom-40 z-2">
					{page.desc}
				</p>
				<button class="font-grotesk bg-#6236FF/80 hover:bg-#6236FF hover:animate-swing hover:animate-1s px-3 py-2 pb-3 md:px-4 md:py-3 md:pb-4 absolute bottom-8 md:bottom-12 rounded-3xl text-3xl z-2">
					<a href={page.href} class="i-akar-icons-arrow-up-right"></a>
				</button>
			</div>
		{/each}
	</div>
</section>
