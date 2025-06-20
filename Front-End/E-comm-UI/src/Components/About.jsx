function About() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 rounded-t-lg mb-12 sm:mb-16 md:mb-[100px]">
      
      <div className="flex flex-col p-6 sm:p-8 md:p-10 gap-4 sm:gap-5 md:gap-7 justify-center items-center w-full md:w-[25%]">
        <h1 className="font-bold text-xl sm:text-2xl md:text-2xl text-center">
          About us!
        </h1>
        <p className="text-center text-sm sm:text-base md:text-base">
          Crafted with Pride, Designed for Joy – Make in India Handbags! Your Perfect Handbag Awaits!
        </p>
      </div>

      
      <div className="flex flex-col p-6 sm:p-8 md:p-10 gap-2 sm:gap-3 justify-center items-center w-full md:w-[25%]">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 bg-amber-200 rounded-full">
          <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">
            shopping_bag
          </span>
        </div>
        <h1 className="font-bold text-base sm:text-lg md:text-lg text-center">
          Large Assortment
        </h1>
        <p className="text-center text-sm sm:text-base md:text-base">
          We offer many different types of products with fewer variations in each category
        </p>
      </div>

      
      <div className="flex flex-col p-6 sm:p-8 md:p-10 gap-2 sm:gap-3 justify-center items-center w-full md:w-[25%]">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 bg-amber-200 rounded-full">
          <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">
            local_shipping
          </span>
        </div>
        <h1 className="font-bold text-base sm:text-lg md:text-lg text-center">
          Fast & Free Shipping
        </h1>
        <p className="text-center text-sm sm:text-base md:text-base">
          4-day or less delivery time, free shipping, and an expedited delivery option
        </p>
      </div>

      
      <div className="flex flex-col p-6 sm:p-8 md:p-10 gap-2 sm:gap-3 justify-center items-center w-full md:w-[25%]">
        <div className="flex justify-center items-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 bg-amber-200 rounded-full">
          <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">
            support_agent
          </span>
        </div>
        <h1 className="font-bold text-base sm:text-lg md:text-lg text-center">
          24/7 Support
        </h1>
        <p className="text-center text-sm sm:text-base md:text-base">
          Answers to any business-related inquiry 24/7 and in real-time
        </p>
      </div>
    </div>
  );
}

export default About;