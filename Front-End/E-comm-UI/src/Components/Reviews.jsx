import { useRef, useEffect } from "react";

function Reviews() {
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 300; // Approximate width of one card (adjust based on screen size)
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll) {
          // Reset to the beginning when reaching the end
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to the next card
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="my-12 sm:my-16 md:my-[100px] px-2 sm:px-6 relative">
      <h1 className="font-bold text-xl sm:text-2xl md:text-2xl text-center sm:text-left">
        What customers say about
      </h1>
      <h1 className="font-bold text-xl sm:text-2xl md:text-2xl text-center sm:text-left">
        BAGGYES
      </h1>
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-2/3 transform -translate-y-2/3 bg-amber-300 p-2 rounded-full shadow-md hover:bg-amber-400 z-10"
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">
          chevron_left
        </span>
      </button>
      <div className="">
        {/* Reviews Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 mt-4 sm:mt-5 overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar scrollbar-thumb-amber-300 scrollbar-track-amber-100"
        >
          <div className="flex-none w-72 sm:w-80 md:w-[450px] h-48 sm:h-52 md:h-[200px] bg-amber-50 border rounded-md p-5 sm:p-6 snap-center">
            <div className="flex justify-between text-amber-600">
              <div className="flex justify-center items-center gap-2 sm:gap-3">
                <img
                  className="w-10 sm:w-12 md:w-[50px] h-10 sm:h-12 md:h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="Customer Dhriaj Kumar"
                />
                <h2 className="font-bold text-sm sm:text-base">Dhriaj Kumar</h2>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  star
                </span>
                <span className="text-sm sm:text-base">
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 h-24 sm:h-24 md:h-[100px] overflow-hidden">
              <p className="text-gray-500 text-xs sm:text-sm">
                I love my Make in India handbag! The quality is amazing, and the
                design is so stylish. It’s perfect for daily use, and I’ve
                gotten so many compliments. Truly a great purchase!
              </p>
            </div>
          </div>
          <div className="flex-none w-72 sm:w-80 md:w-[450px] h-48 sm:h-52 md:h-[200px] bg-amber-50 border rounded-md p-5 sm:p-6 snap-center">
            <div className="flex justify-between text-amber-600">
              <div className="flex justify-center items-center gap-2 sm:gap-3">
                <img
                  className="w-10 sm:w-12 md:w-[50px] h-10 sm:h-12 md:h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="Customer Ram Lal"
                />
                <h2 className="font-bold text-sm sm:text-base">Ram Lal</h2>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  star
                </span>
                <span className="text-sm sm:text-base">
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 h-24 sm:h-24 md:h-[100px] overflow-hidden">
              <p className="text-gray-500 text-xs sm:text-sm">
                This handbag is a game-changer! Beautifully crafted with such
                attention to detail. It’s spacious, durable, and proudly Made in
                India. I’m thrilled with my purchase and highly recommend it!
              </p>
            </div>
          </div>
          <div className="flex-none w-72 sm:w-80 md:w-[450px] h-48 sm:h-52 md:h-[200px] bg-amber-50 border rounded-md p-5 sm:p-6 snap-center">
            <div className="flex justify-between text-amber-600">
              <div className="flex justify-center items-center gap-2 sm:gap-3">
                <img
                  className="w-10 sm:w-12 md:w-[50px] h-10 sm:h-12 md:h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="Customer Raja Gautam"
                />
                <h2 className="font-bold text-sm sm:text-base">Raja Gautam</h2>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  star
                </span>
                <span className="text-sm sm:text-base">
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 h-24 sm:h-24 md:h-[100px] overflow-hidden">
              <p className="text-gray-500 text-xs sm:text-sm">
                I’m in love with this handbag! The quality is top-notch, and
                it’s so versatile for any occasion. Knowing it’s Made in India
                makes me proud to carry it everywhere!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-2/3 transform -translate-y-2/3 bg-amber-300 p-2 rounded-full shadow-md hover:bg-amber-400 z-10"
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">
          chevron_right
        </span>
      </button>
    </div>
  );
}

export default Reviews;
