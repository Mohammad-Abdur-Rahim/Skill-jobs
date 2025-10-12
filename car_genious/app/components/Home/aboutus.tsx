import aboutUs from "app/assets/se1.png";

export default function AboutUs() {
  return (
    <section className="w-10/12 mx-auto py-20">
      <div className="flex flex-col md:flex-row justify-center gap-12 ">
        {/* Image div */}
        <div className="w-full md:w-1/2">
          <img src={aboutUs} alt="about image" className="w-full " />
        </div>

        {/* Text div */}
        <div className="w-full md:w-1/2 mt-5">
          <h3 className="text-[#FF3811] mb-2 font-bold text-2xl">About Us</h3>
          <h1 className="text-4xl md:text-6xl font-bold mt-10 mb-10 leading md:leading-tight text-[#151515]">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="text-base md:text-lg mt-15 mb-15 leading-relaxed md:w-3/5 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>
          <p className="text-base md:text-lg mb-15 leading-relaxed md:w-3/5 text-[#737373]">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>
          <button className="bg-red-500 px-8 py-3 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
}
