<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let pages = [
		{
			name: 'Eras',
			href: 'eras',
			src: '',
			desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
		},
		{
			name: 'Events',
			href: 'events',
			src: '',
			desc: 'Stay up to date where and when things happen.'
		},
		{ name: 'Program Progress Report', href: 'progress', src: '', desc: '' },
		{ name: 'Titles', href: 'titles', src: '', desc: 'Earn your title, earn your ZTG' },
		{ name: 'Resources', href: 'resources', src: '', desc: 'Here you find official zeitgeist material' }
	];
	let title = {
		name: 'The Zeitgeist Seer Program',
		href: '/',
		desc: 'Eras are the vehicle of progression for the Seer Program as a whole.'
	};
</script>

<svelte:head>
	<title>{title.name}</title>
</svelte:head>

<section class="mx-auto">
	<div class="flex flex-col p-4">
		<div
			class="bg-gradient-to-bl to-#0100FE/70 from-#C000B0/90 w-full h-118 rounded-3xl mb-4 p-16 relative"
		>
			<div class="absolute top-40 right-0 z-1">
				<img src={title.src} alt={title.name} />
			</div>
			<div class="absolute w-2/3 z-2">
				<h2 class="text-6xl mb-4">{title.name}</h2>
			</div>
				<p class="w-1/2 text-xl absolute bottom-40">
					{title.desc}
				</p>
				<button class="bg-#6236FF px-10 py-4 my-5 rounded-3xl absolute bottom-16">
					<div class="i-mdi-alarm text-orange-400" />
					<a href={title.href}>Continue</a>
				</button>
			
		</div>
		{#each pages as page}
			<div class="border-1 border-#6236FF w-full h-118 rounded-3xl mb-4 p-16 relative">
				<div class="absolute right-0 top-40 z-1">
					<img src={page.src} alt={page.name} />
				</div>
				<div class="w-2/3 z-2">
					<h2 class="text-6xl mb-4">{page.name}</h2>
				</div>
				<p class="w-1/2 text-xl absolute bottom-40">
					{page.desc}
				</p>
				<button class="bg-#6236FF px-4 py-2 absolute bottom-16 rounded-3xl">
					<a href={page.href}>></a>
				</button>
			</div>
		{/each}
	</div>
</section>

<style>
</style>
