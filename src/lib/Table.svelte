<script lang="ts">
  export var data;
</script>

{#if data}
  <table class="table striped">
    <thead>
      <tr>
        {#each Object.keys(data[0]) as key}
          <th>{key}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each Object.keys(row) as key}
            <td>{row[key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style>
  tr {
    @apply border-b-2 border-gray-300;
  }
  td,
  th {
    @apply p-2;
  }
  .table.striped tbody tr:nth-child(odd) {
    @apply bg-gray-100;
  }
</style>
