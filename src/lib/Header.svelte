<header>
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
      <div class="flex justify-between py-4">
        <div>Logo</div>
        <div>
          <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/tables">Tables</a></li>
            <li><a href="/datatables">Datatables</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="postcss">
  /* a.skip {
    @apply hidden absolute hover:block focus:block;
  } */
  ul.menu {
    @apply flex flex-row list-none;
  }
  ul.menu > li > a {
    @apply flex items-center p-4;
  }
</style>
