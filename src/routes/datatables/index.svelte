<script lang="ts">
  // import { assets } from '$app/paths';
  // console.log(assets);

  import path from "path-browserify";
  const files = import.meta.glob("/static/assets/tables/**/*.csv");
  const filenames = Object.keys(files).map((filename) => {
    const { name } = path.parse(filename);
    return name;
  });
</script>

<div class="prose">
  <h1>Tables</h1>
  <p>Here is a list of tables.</p>

  {#if files}
    <ul>
      {#each filenames as filename}
        <li>
          <a href="/datatables/{filename}">
            {filename}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No tables</p>
  {/if}
</div>
