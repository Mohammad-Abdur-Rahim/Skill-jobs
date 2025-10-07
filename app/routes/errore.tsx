import type { Route } from "./+types/errore";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "errore | My App" },
    { name: "description", content: "This is the errore page" },
  ];
}

export default function errore() {
  return (
    <>
      <h1>This is errore</h1>
    </>
  );
}