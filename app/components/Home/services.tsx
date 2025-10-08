import one from "app/assets/1.png";
import two from "app/assets/2.png";
import three from "app/assets/3.png";
import four from "app/assets/4.png";
import five from "app/assets/5.png";
import six from "app/assets/6.png";
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
            the majority have suffered alteration in some form, by injected
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
    </>
  );
}
