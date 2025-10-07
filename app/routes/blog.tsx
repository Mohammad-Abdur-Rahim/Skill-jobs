import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "blog | My App" },
    { name: "description", content: "This is the blog page" },
  ];
}

export default function blog() {
  return (
    <>
      <h1>This is blog</h1>
    </>
  );
}