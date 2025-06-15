function Reviews() {
  return (
    <>
      <div className="my-[100px]">
        <h1 className="font-bold text-2xl">What customers say about </h1>
        <h1 className="font-bold text-2xl">BAGGYES</h1>
        <div className="flex gap-5 justify-between mt-5">
          <div className="w-[450px] h-[200px] bg-amber-50 border rounded-md p-4">
            <div className="flex justify-between   text-amber-600">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="cutomer image"
                />
                <h2 className="font-bold">Dhriaj kumar</h2>
              </div>

              <div className="flex justify-center items-center">
                <span className="material-symbols-outlined">star</span>
                <span>
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className="mt-4 h-[100px]  overflow-hidden">
              <p className="text-gray-500">
                I love my Make in India handbag! The quality is amazing, and the design is so stylish. It’s perfect for daily use, and I’ve gotten so many compliments. Truly a great purchase!
              </p>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-amber-50 border rounded-md p-4">
            <div className="flex justify-between  text-amber-600">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="cutomer image"
                />
                <h2 className="font-bold">Ram Lal</h2>
              </div>

              <div className="flex justify-center items-center">
                <span className="material-symbols-outlined ">star</span>
                <span>
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className="  mt-4 h-[100px]  overflow-hidden">
              <p className="text-gray-500">
                This handbag is a game-changer! Beautifully crafted with such attention to detail. It’s spacious, durable, and proudly Made in India. I’m thrilled with my purchase and highly recommend it!
              </p>
            </div>
          </div>
          <div className="w-[450px] h-[200px] bg-amber-50 border rounded-md p-4">
            <div className="flex justify-between text-amber-600 ">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="/img/cutomer_img.jpg"
                  alt="cutomer image"
                />
                <h2 className="font-bold">Raja Gautam</h2>
              </div>
              <div className="flex justify-center items-center">
                <span className="material-symbols-outlined">star</span>
                <span>
                  <strong>4.6</strong>
                </span>
              </div>
            </div>
            <div className=" mt-4 h-[100px]  overflow-hidden">
              <p className="text-gray-500">
                I’m in love with this handbag! The quality is top-notch, and it’s so versatile for any occasion. Knowing it’s Made in India makes me proud to carry it everywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
