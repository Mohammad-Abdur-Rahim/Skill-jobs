// import p1 from "app/assets/p1.png"
import T1 from "app/assets/t1.png"
import T2 from "app/assets/t2.png"
import T3 from "app/assets/t3.png"
import Facebook from "app/assets/facebook.png"
import Twitter from "app/assets/twitter.png"
import Linkedin from "app/assets/linkedin.png"
import Instragram from "app/assets/instragram.png"
export default function team() {
  return (
    <>
      <section className="w-9/12 mx-auto py-20 relative">
        <div className="text-center">
          <h3 className="text-[#FF3811] mb-2 font-bold text-2xl">Team</h3>
          <h1 className="text-4xl md:text-6xl font-bold  leading md:leading-tight text-[#151515]">
            Meet Our Team
          </h1>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-[#737373] md:w-4/6 mx-auto">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center pt-10">
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
               <img src={T1} alt="" />
              </figure>
              <div className="card-body text-center">
    
                <h2 className=" text-[#151515] font-bold text-2xl ">Car Engine Plug</h2>
                <h3 className="text-[#737373] mb-2 font-medium text-xl">
                 Engine Expert
                </h3>
                <div className="flex justify-center gap-2">
                    <div><img src= {Facebook} alt="Fcabook" /></div>
                    <div><img src= {Twitter} alt="Twitter" /></div>
                    <div><img src= {Linkedin} alt="Linkedin" /></div>
                    <div><img src= {Instragram} alt="Instragram" /></div>
                </div>
              </div>
            </div>
          </div>

           <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
               <img src={T2} alt="" />
              </figure>
              <div className="card-body text-center">
    
                <h2 className=" text-[#151515] font-bold text-2xl ">Car Engine Plug</h2>
                <h3 className="text-[#737373] mb-2 font-medium text-xl">
                 Engine Expert
                </h3>
                <div className="flex justify-center gap-2">
                    <div><img src= {Facebook} alt="Fcabook" /></div>
                    <div><img src= {Twitter} alt="Twitter" /></div>
                    <div><img src= {Linkedin} alt="Linkedin" /></div>
                    <div><img src= {Instragram} alt="Instragram" /></div>
                </div>
              </div>
            </div>
          </div>
           <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
               <img src={T3} alt="" />
              </figure>
              <div className="card-body text-center">
    
                <h2 className=" text-[#151515] font-bold text-2xl ">Car Engine Plug</h2>
                <h3 className="text-[#737373] mb-2 font-medium text-xl">
                 Engine Expert
                </h3>
                <div className="flex justify-center gap-2">
                    <div><img src= {Facebook} alt="Fcabook" /></div>
                    <div><img src= {Twitter} alt="Twitter" /></div>
                    <div><img src= {Linkedin} alt="Linkedin" /></div>
                    <div><img src= {Instragram} alt="Instragram" /></div>
                </div>
              </div>
            </div>
          </div>
          </div>
           {/* Slider Arrows */}
      <div className="absolute w-full md:top-[60%] left-0 right-0  flex md:justify-between  gap-5 ">
       <div>
         <button className="w-12 h-12 rounded-full bg-gray-700 bg-opacity-50 hover:bg-gray-900 flex items-center justify-center text-white text-xl">
          &larr;
        </button>
       </div>
        <div>
            <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white text-xl">
          &rarr;
        </button>
        </div>
      </div>
      </section>
    </>
  );
}