import Newl1 from "/img/newL1.webp";
import Newl2 from "/img/newL2.webp";
import Newl3 from "/img/newL3.jpg";

function NewLaunchSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-10 sm:my-16 md:my-20 bg-amber-50 rounded-lg shadow-md px-4 sm:px-5">
      
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:h-[700px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400">
          Plan to
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600">
          Launch new
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-700">
          Products
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quos odit pariatur quidem minus possimus, blanditiis quae? Ad voluptas
          natus expedita unde laboriosam, corporis velit omnis consequatur
          voluptatem aut, dolorem id veritatis veniam, nobis itaque? Labore
          explicabo recusandae aperiam est libero ullam sequi laboriosam, quia
          odit quibusdam nemo excepturi quod!
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row md:justify-evenly gap-10 sm:gap-5 md:col-span-3 items-center md:items-end p-4 sm:p-5">
        <div
          className="flex flex-col justify-end items-center p-4 sm:p-5 gap-3 sm:gap-4 w-full sm:w-72 md:w-80 h-96 sm:h-72 md:h-[500px] rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8"
          style={{
            backgroundImage: `url(${Newl1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="border rounded bg-green-200 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm hover:bg-green-300">
            Know more
          </button>
          <h4 className="font-semibold text-white text-center text-xs sm:text-sm">
            Newly launched traditional bag, New style authentic wearing matched
            hand bag
          </h4>
        </div>
        <div
          className="flex flex-col justify-end items-center p-4 sm:p-5 gap-3 sm:mb-10 sm:gap-4 w-full sm:w-72 md:w-80 h-96 sm:h-72 md:h-[500px] rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8"
          style={{
            backgroundImage: `url(${Newl2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="border rounded bg-green-200 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm hover:bg-green-300">
            Know more
          </button>
          <h4 className="font-semibold text-white text-center text-xs sm:text-sm">
            Newly launched traditional bag, New style authentic wearing matched
            hand bag
          </h4>
        </div>
        <div
          className="flex flex-col justify-end items-center p-4 sm:p-5 gap-3 sm:gap-4 w-full sm:w-72 md:w-80 h-96 sm:h-72 md:h-[500px] rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8"
          style={{
            backgroundImage: `url(${Newl3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="border rounded bg-green-200 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm hover:bg-green-300">
            Know more
          </button>
          <h4 className="font-semibold text-white text-center text-xs sm:text-sm">
            Newly launched traditional bag, New style authentic wearing matched
            hand bag
          </h4>
        </div>
      </div>
    </div>
  );
}

export default NewLaunchSection;
