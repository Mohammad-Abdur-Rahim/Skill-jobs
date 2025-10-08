import heroImg from "app/assets/hero.png"

export default function banner() {
  return (
    <section
      className="relative w-10/12 mx-auto rounded-lg mt-10 mb-10 bg-cover bg-center shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Content */}
      <div className="flex flex-col justify-center h-full px-6 md:px-20 py-20 text-white max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-snug">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
        <p className="text-base md:text-lg mb-8 md:mb-10 w-full md:w-5/12 leading-relaxed">
          There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition font-medium">
            Discover More
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-medium">
            Latest Project
          </button>
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button className="w-12 h-12 rounded-full bg-gray-700 bg-opacity-50 hover:bg-gray-900 flex items-center justify-center text-white text-xl">
          &larr;
        </button>
        <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white text-xl">
          &rarr;
        </button>
      </div>
    </section>
  );
}