// import bagImage from '../img/bag1.jpeg';

function Carousel() {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-20 p-4 sm:p-6 md:p-10">
     
      <div className="basis-1/2 flex flex-col gap-3 sm:gap-4 mx-2 sm:mx-4 md:mx-10 md:pt-20 h-auto md:h-96">
        <h1 id="hero_heading" className="text-yellow-900 font-bold text-3xl text-center sm:text-start sm:text-4xl md:text-5xl">
          Choose your
        </h1>
        <h1 id="hero_heading" className="text-yellow-900 font-bold text-3xl sm:text-4xl md:text-5xl text-center sm:text-start w-max ">
          dream style handbags
        </h1>
        <div className="flex gap-6 sm:gap-8 md:gap-10 px-2 mt-2 sm:mt-3">
          <div className="border-r pr-3 sm:pr-4">
            <h1 className="font-semibold text-sm sm:text-base">20+</h1>
            <p className="text-gray-500 text-xs sm:text-sm">Types of bags</p>
          </div>
          <div>
            <h1 className="font-semibold text-sm sm:text-base">1000+</h1>
            <p className="text-gray-500 text-xs sm:text-sm">Customer</p>
          </div>
        </div>
        <div className="flex bg-amber-100 shadow-sm rounded-xl gap-2 sm:gap-4 mt-2 sm:mt-3 w-full sm:w-80 md:w-96 p-2">
          <input
            className="w-full p-2 outline-none bg-transparent text-sm sm:text-base"
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="bg-amber-300 px-3 sm:px-4 rounded-lg flex justify-center items-center hover:bg-amber-400">
            <span className="material-symbols-outlined text-lg sm:text-xl">search</span>
          </button>
        </div>
      </div>

      
      <div className="flex justify-center">
        <img
        id="bag_img"
          className="w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 object-cover rounded-lg"
          src="/img/bag1.png"
          alt="Dream style handbag"
        />
      </div>
    </div>
  );
}

export default Carousel;