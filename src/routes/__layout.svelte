<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<body class="bg-#1A1A1A text-white">
	<div class="sm:container mx-auto w-full md:w-85/100 lg:w-75/100 xl:w-65/100">
		<Header />
		<main class="mx-auto w-95/100">
			<slot />
		</main>
		<Footer />
	</div>
</body>
