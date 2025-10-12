import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "services | My App" },
    { name: "description", content: "This is the services page" },
  ];
}

export default function services() {
  return (
    <>
      <h1>This is services</h1>
    </>
  );
}