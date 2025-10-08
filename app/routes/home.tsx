import type { Route } from "./+types/home";
import Banner from "~/components/Home/banner";
import About from "~/components/Home/aboutus";
import Services from "~/components/Home/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home | My App" },
    { name: "description", content: "This is the home page" },
  ];
}

export default function home() {
  return (
    <>
     
      <Banner/>
      <About/>
      <Services/>
      
    </>
  );
}