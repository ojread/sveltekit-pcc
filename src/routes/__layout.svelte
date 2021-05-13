<script lang="ts">
  import "../app.pcss";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header />

<main role="main">
    <div class="container py-4">
        <slot />
    </div>
</main>

<Footer />
