/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }) {
    const files = import.meta.glob("/static/assets/tables/**/*.csv");
    const path = `/static/assets/tables/${params.slug}.csv`;

    if (files[path]) {
        const table = await files[path]();
        return {
            body: table.default,
        };
    } else {
        return {
            error: 404,
        };
    }
}
