<script lang="ts" context="module">
  export const prerender = true;

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const res = await fetch(`/tables/${page.params.slug}/data.json`);
    return {
      props: {
        data: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import Table from "$lib/Table.svelte";
  export var data;
</script>

<Table {data} />
