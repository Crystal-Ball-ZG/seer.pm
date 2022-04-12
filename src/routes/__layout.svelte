<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<body class="bg-#1A1A1A text-white w-screen">
	<div class="container lg:w-7/10 mx-auto">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</body>
