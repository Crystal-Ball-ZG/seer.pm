<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<body class="bg-#1A1A1A text-white w-screen">
	<div class="container w-95/100 md:w-85/100 lg:w-75/100 xl:w-65/100 mx-auto">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</body>
