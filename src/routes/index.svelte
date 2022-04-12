<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	let pages = [
				{name: 'Eras', href:'eras', desc:''}, 
				{name: 'Events', href:'events'},
				{name: 'Program Progress Report', href:'progress'},
				{name: 'Titles', href:'titles'},
				{name: 'Resources', href:'resources'}
			];
	let title = {name:'The Zeitgeist Seer Program', href:'home', desc:'Eras are the vehicle of progression for the Seer Program as a whole.'};
</script>

<svelte:head>
	<title>{title.name}</title>
</svelte:head>

<section>
	<div class="flex flex-col">
		<div class="bg-gradient-to-bl to-#0100FE/70 from-#C000B0/90 w-full h-124 rounded-3xl mb-4">
			<div class="px-16 relative">
				<div class="absolute right-16 top-40 z-1">
					<img src="" alt=""/>
					wtf
				</div>
				<div class="w-2/3 z-2">
					<h2 class="text-6xl">{title.name}</h2>
					<p class="w-1/2 text-2xl">
							Eras are the vehicle of progression for the Seer Program as a whole.
					</p>
					<div class="bg-#6236FF px-10 py-3 w-16 rounded-3xl">
						<div class="i-mdi-alarm text-orange-400"></div>
						<a href={title.href}>Continue</a>
					</div>
				</div>
			</div>
		</div>
		{#each pages as page}
		<div class="border-1 border-#6236FF w-full h-124 rounded-3xl mb-4">
			<div class="px-16 relative">
				<div class="absolute right-16 top-40 z-1">
					<img src="" alt={page.name}/>
				</div>
				<div class="w-2/3 z-2">
					<h2 class="text-6xl">{page.name}</h2>
					<p class="w-1/2 text-2xl">
							Eras are the vehicle of progression for the Seer Program as a whole.
					</p>
					<div class="bg-#6236FF px-10 py-3 w-20 rounded-3xl">
						<a href={page.href}>Continue</a>
					</div>
				</div>
			</div>
		</div>
		{/each}
	</div>
</section>

<style>
</style>
