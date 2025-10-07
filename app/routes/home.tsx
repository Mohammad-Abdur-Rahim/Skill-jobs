import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home | My App" },
    { name: "description", content: "This is the home page" },
  ];
}

export default function home() {
  return (
    <>
      <h1>This is home</h1>
    </>
  );
}