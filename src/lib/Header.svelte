<script lang="ts">
  import PccLogo from "$lib/PccLogo.svelte";
</script>

<header class="relative">
  <a class="skip" href="#main"> Skip to content </a>

  <div class="bg-secondary text-white">
    <div class="container">
      <ul class="menu">
        <li><a href="/">Accessibility</a></li>
        <li><a href="/">A-Z</a></li>
        <li><a href="/">My Portsmouth</a></li>
      </ul>
    </div>
  </div>

  <div class="bg-primary text-white">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <a href="/" class="block w-52 p-4">
            <PccLogo />
          </a>
        </div>
        <div>
          <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/tables">Tables</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="postcss">
  a.skip {
    @apply absolute -top-16 left-1/2 transform -translate-x-1/2 p-4 bg-highlight transition-all rounded-b focus:top-0;
  }
  ul.menu {
    @apply flex flex-row list-none;
  }
  ul.menu > li > a {
    @apply flex items-center p-4;
  }
</style>
