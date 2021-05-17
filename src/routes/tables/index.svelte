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

<div class="prose">
  <h1>Tables</h1>
  <p>Here is a list of tables.</p>

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
