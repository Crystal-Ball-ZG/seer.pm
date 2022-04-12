<script lang="ts" context="module">
    export const prerender = true
    export const load = async ({ url, fetch}) => {
        const res = await fetch('posts.json')
        return res.ok ? { props: { path: url.pathname, posts: await res.json() } } : { props: { path: url.pathname} } 
    }
</script>
<script lang="ts">
    import { browser } from '$app/env'
    import { fly } from 'svelte/transition'
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte'
</script>

<!--Header/-->

<slot/>

<!--Footer/-->