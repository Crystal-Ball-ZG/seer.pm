<script lang="ts">
	import '@unocss/reset/normalize.css'
	import 'uno.css';
	
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<body class="bg-#1A1A1A text-white">
	<div class="container mx-auto">
		<Header/>
		<main>
			<slot />
		</main>
		<Footer/>
	</div>
</body>
