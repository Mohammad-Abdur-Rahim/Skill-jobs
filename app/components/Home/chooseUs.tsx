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
        <div className="text-center">
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
        <div className="grid md:grid-cols-6 justify-center items-center">
            <div className="border p-10">
                <img src={Team} alt="Team">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            <div className="border p-10">
                <img src={Time} alt="w">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            <div className="border p-10">
                <img src={Support} alt="support">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            <div className="border p-10">
                <img src={Equipment} alt="Team">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            <div className="border p-10">
                <img src={Guranty} alt="Team">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            <div className="border p-10">
                <img src={Time} alt="Team">
                </img>
                     <h2 className="font-bold text-[#151515] ">Expert Team</h2>
            </div>
            
            
        </div>
     </section>
    </>
  );
}