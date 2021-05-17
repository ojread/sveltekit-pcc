/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }) {
  const table = await import(`/static/assets/tables/${params.slug}.csv`);
  const data = await table;

  if (data) {
    return {
      body: data.default,
    };
  } else {
    return {
      status: 404,
    };
  }
}
