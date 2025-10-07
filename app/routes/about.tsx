import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "about | My App" },
    { name: "description", content: "This is the about page" },
  ];
}

export default function about() {
  return (
    <>
      <h1>This is about</h1>
    </>
  );
}