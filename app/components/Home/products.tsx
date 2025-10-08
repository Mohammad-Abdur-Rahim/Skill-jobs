import p1 from "app/assets/p1.png"
import p2 from "app/assets/p2.png"
import p3 from "app/assets/p3.png"
import p4 from "app/assets/p4.png"
import p5 from "app/assets/p5.png"
import p6 from "app/assets/p6.png"
import rating from "app/assets/Ratting.png"
export default function products() {
  return (
    <>
        <section className="w-9/12 mx-auto py-20">
        {/* Text Area  */}
        <div className="text-center">
          <h3 className="text-[#FF3811] mb-2 font-bold text-2xl">Popular Products</h3>
          <h1 className="text-4xl md:text-6xl font-bold  leading md:leading-tight text-[#151515]">
            Browse Our Products
          </h1>
          <p className="text-base md:text-lg mt-5 leading-relaxed  text-[#737373] md:w-4/6 mx-auto">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        {/* Card Area ------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center pt-10">
         <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p1} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Car Engine Plug</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p2} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Car Air Filter</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p3} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Cools Led Light</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p4} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Cools Led Light</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p5} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Cools Led Light</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-100 shadow-2xl ">
              <figure className="bg-gray-100 m-5 pt-8 pb-8">
                <img src={p6} alt="" />
              </figure>
              <div className="card-body text-center">
                <img src={rating} alt="Rating" className="w-2/6 mx-auto" />
                <h2 className=" text-[#151515] font-bold text-2xl ">Cools Led Light</h2>
                <h3 className="text-[#FF3811] mb-2 font-medium text-xl">
                 $20.00
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
           <button className="bg-white border text-red-500 px-6 py-3 rounded-lg cursor-pointer  font-medium">
                   More Products
                  </button>
        </div>
      </section>
    </>
  );
}