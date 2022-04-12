<script lang="ts">
    import { browser } from '$app/env'
    //import { site } from '$lib/config/site'
 
    let pin
    let percent
    let [scrollY, lastY] = [0, 0]

    const checkY = (scrollY) => {
        const y = lastY - scrollY
        lastY = scrollY
        return y < 20 ? false : true
    }
    $: pin = checkY(scrollY)
</script>

<svelte:window bind:scrollY />

<header
    id="header"
    class="navbar fixed w-screen z-50">
</header>





