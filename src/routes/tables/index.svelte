<script lang="ts" context="module">
  export const prerender = true;

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const res = await fetch(`/tables/data.json`);
    return {
      props: {
        tables: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  interface TableLink {
    dir: string;
    name: string;
    slug: string;
  }

  export var tables: TableLink[];
</script>

<svelte:head>
	<title>Tables</title>
</svelte:head>

<div class="prose">
  <h1>Tables</h1>

  {#if tables}
    <ul>
      {#each tables as table}
        <li>
          <a href="/tables/{table.slug}">
            {table.name}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No tables</p>
  {/if}
</div>
