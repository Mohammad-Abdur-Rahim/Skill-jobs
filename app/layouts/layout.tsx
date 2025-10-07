import { Outlet } from "react-router";
import Footer from "~/components/Shared/Footer";
import Nav from "~/components/Shared/Nav";

export default function layout() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
}