import Team from "app/assets/team.png"
import Watch from "app/assets/watch.png"
import Support from "app/assets/support.png"
import Equipment from "app/assets/equipment.png"
import Guranty from "app/assets/guranty.png"
import Time from "app/assets/time.png"
export default function chooseUs() {
  return (
    <>
     <section className="w-9/12 mx-auto py-20 ">
        <div className=" text-center mb-10">
          <h3 className="text-[#FF3811] mb-2 font-bold text-2xl">Core Features</h3>
          <h1 className="text-4xl md:text-6xl font-bold  leading md:leading-tight text-[#151515]">
            Why Choose Us
          </h1>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-[#737373] md:w-4/6 mx-auto">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid md:grid-cols-6 place-items-center gap-5">
  <div className="border border-gray-300 p-10 rounded-lg flex flex-col items-center text-center">
    <img src={Team} alt="Team" className="mb-2" />
    <h2 className="font-bold text-[#151515] text-base w-full">Expert Team</h2>
  </div>

  <div className="border border-gray-300 p-10 rounded-lg bg-[#FF3811] flex flex-col items-center text-center">
    <img src={Watch} alt="Watch" className="mb-2" />
    <h2 className="font-bold text-white">Expert Team</h2>
  </div>

  <div className="border border-gray-300 p-10 rounded-lg flex flex-col items-center text-center">
    <img src={Support} alt="Support" className="mb-2" />
    <h2 className="font-bold text-[#151515]">Expert Team</h2>
  </div>

  <div className="border border-gray-300 p-10 rounded-lg flex flex-col items-center text-center">
    <img src={Equipment} alt="Equipment" className="mb-2" />
    <h2 className="font-bold text-[#151515]">Expert Team</h2>
  </div>

  <div className="border border-gray-300 p-10 rounded-lg flex flex-col items-center text-center">
    <img src={Guranty} alt="Guranty" className="mb-2" />
    <h2 className="font-bold text-[#151515]">Expert Team</h2>
  </div>

  <div className="border border-gray-300 p-10 rounded-lg flex flex-col items-center text-center">
    <img src={Time} alt="Time" className="mb-2" />
    <h2 className="font-bold text-[#151515]">Expert Team</h2>
  </div>
</div>

     </section>
    </>
  );
}