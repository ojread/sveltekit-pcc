<script lang="ts" context="module">
  export const prerender = true;

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const res = await fetch(`/tables/${page.params.slug}.json`);
    return {
      props: {
        data: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import DataTable from "@fouita/data-table";

  export var data;

  const head = Object.keys(data[0]).reduce((columns, column) => {
    columns[column] = column;
    return columns;
  }, {});
</script>

<DataTable {head} rows={data} stripped hover />
