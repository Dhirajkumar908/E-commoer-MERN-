// import bagImage from '../img/bag1.jpeg';

function Carousel() {
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-6 md:gap-20 p-6 md:p-10 ">
        <div className="basis-1/2 flex flex-col gap-4  mx-4 md:mx-10 md:pt-20 h-96">
          <h1 className="text-yellow-900 font-bold text-4xl md:text-5xl">
            Choose your
          </h1>
          <h1 className="text-yellow-900 font-bold text-4xl md:text-5xl">
            dream style handbags
          </h1>
          <div className="flex gap-10 px-2 mt-3">
            <div className="border-r pr-4">
              <h1 className="font-semibold">20+</h1>
              <p className="text-gray-500">Types of bags</p>
            </div>
            <div>
              <h1 className="font-semibold">1000+</h1>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
          <div className=" flex bg-amber-100  shadow-sm rounded-xl gap-10 mt-3 w-96 p-2">
            <input
              className="w-96 p-2 outline-none bg-transparent	"
              type="text"
              placeholder="What are you looking for? "
            />
            <button className="bg-amber-300 px-4 rounded-lg align-end flex justify-center items-center">
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div className=" ">
          <img className="w-80 h-96 " src="/img/bag1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Carousel;
