import path from "path";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }) {
  const files = import.meta.glob("/static/assets/tables/**/*.csv");
  const tables = Object.keys(files).map((filename) => {
    const { dir, name } = path.parse(filename);
    const localDir = dir.slice(22);
    const slug = path.join(localDir, name);
    return {
      dir: localDir,
      name,
      slug,
    };
  });

  return {
    body: tables,
  };
}
