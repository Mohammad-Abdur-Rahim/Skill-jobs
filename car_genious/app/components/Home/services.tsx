import one from "app/assets/1.png";
import two from "app/assets/2.png";
import three from "app/assets/3.png";
import four from "app/assets/4.png";
import five from "app/assets/5.png";
import six from "app/assets/6.png";
import cal from "app/assets/cal.png";
import call from "app/assets/call.png";
import map from "app/assets/map.png";
export default function services() {
  return (
    <>
      <section className="w-9/12 mx-auto py-20">
        {/* Text Area  */}
        <div className="text-center">
          <h3 className="text-[#FF3811] mb-2 font-bold text-2xl">About Us</h3>
          <h1 className="text-4xl md:text-6xl font-bold  leading md:leading-tight text-[#151515]">
            Our Service Area
          </h1>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-[#737373] w-4/6 mx-auto">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        {/* Card Area ------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center pt-10">
          <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={one} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Electrical System</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={two} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Engine Diagnostics</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={three} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Auto Car Repair</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
           <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={four} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Electrical System</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
           <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={five} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Engine Diagnostics</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
           <div>
            <div className="card w-100 shadow-2xl mt-5 pt-5">
              <figure>
                <img src={six} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#151515]">Auto Car Repair</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                  Price : $20.00
                </h3>
                <div className="card-actions justify-end">
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
           <button className="bg-white border text-red-500 px-6 py-3 rounded-lg cursor-pointer  font-medium">
                   More Services
                  </button>
        </div>
      </section>
      <section className="w-10/12 mx-auto py-10 ">
    <div className="bg-black grid grid-cols-1 md:grid-cols-3 py-18 rounded-lg">
        <div>
    <div className="flex justify-center items-center gap-8">
    <div><img src={cal} alt="Calender" /></div>
    <div>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-white mb-4">
            WE are open monday-friday
          </p>
             <h3 className="text-whitemb-2 font-bold text-2xl">7:00 am - 9:00 pm</h3>
    </div>
    </div>

        </div>

<div>
    <div className="flex justify-center items-center gap-8">
    <div><img src={call} alt="Calender" /></div>
    <div>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-white mb-4">
         Have a question?
          </p>
             <h3 className="text-whitemb-2 font-bold text-2xl">+2546 251 2658</h3>
    </div>
    </div>

        </div>
        <div>
    <div className="flex justify-center items-center gap-8">
    <div><img src={map} alt="Calender" /></div>
    <div>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-white mb-4">
            Need a repair? our address
          </p>
             <h3 className="text-whitemb-2 font-bold text-2xl">Liza Street, New York</h3>
    </div>
    </div>

        </div>

        
    </div>
      </section>
    </>
  );
}
