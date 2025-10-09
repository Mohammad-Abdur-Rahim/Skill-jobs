import type { Route } from "./+types/home";
import Banner from "~/components/Home/banner";
import About from "~/components/Home/aboutus";
import Services from "~/components/Home/services";
import Products from "~/components/Home/products";
import Team from "~/components/Home/team"

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
      <Products/>
      <Team/>
      
    </>
  );
}