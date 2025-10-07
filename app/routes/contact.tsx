import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "contact | My App" },
    { name: "description", content: "This is the contact page" },
  ];
}

export default function contact() {
  return (
    <>
      <h1>This is contact</h1>
    </>
  );
}