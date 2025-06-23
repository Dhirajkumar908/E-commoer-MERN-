import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-50 min-h-screen rounded-t-3xl">
     
      <section className="flex flex-col items-center justify-center text-center rounded-t-3xl mt-5 bg-amber-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 mb-4 sm:mb-6">
          About Baggyes
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the story behind Baggyes – your go-to brand for stylish, handmade bags crafted with love and care in India.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 sm:mt-8 bg-amber-300 text-yellow-900 px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-amber-400"
        >
          Explore Our Collection
        </button>
      </section>

      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-900 mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Baggyes was founded in 2020 with a vision to celebrate Indian craftsmanship through beautifully designed handbags. Inspired by the rich cultural heritage of India, we work closely with local artisans to create bags that blend traditional techniques with modern styles. Each piece tells a story of creativity, dedication, and sustainability.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
              Our journey began in a small workshop in Jaipur, and today, we’re proud to serve over 1,000 happy customers worldwide. At Baggyes, we believe in creating products that not only look good but also make a positive impact.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/img/workshop.png"
              alt="Baggyes workshop"
              className="w-80 h-64 sm:h-96 md:h-96 object-cover rounded-lg shadow-md "
            />
          </div>
        </div>
      </section>

      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-amber-100">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-900 mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              At Baggyes, our mission is to empower artisans and promote sustainable fashion. We strive to create eco-friendly, high-quality handbags that reflect the beauty of Indian craftsmanship while supporting local communities. Every bag you purchase helps preserve traditional skills and provides fair wages to our artisans.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/img/bagArtist.png"
              alt="Baggyes artisan at work"
              className="w-96 h-64 sm:h-72 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-900 text-center mb-8 sm:mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/img/cutomer_img.jpg"
              alt="Team Member 1"
              className="w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-900">Dhiraj Kumar</h3>
            <p className="text-sm sm:text-base text-gray-700">Founder & Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/img/cutomer_img.jpg"
              alt="Team Member 2"
              className="w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-900">Anil Kumar</h3>
            <p className="text-sm sm:text-base text-gray-700">Lead Artisan</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/img/cutomer_img.jpg"
              alt="Team Member 3"
              className="w-32 sm:w-40 h-32 sm:h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-900">Neha Gupta</h3>
            <p className="text-sm sm:text-base text-gray-700">Marketing Head</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;