function About() {
  return (
    <>
      <div className="flex h-[300px] bg-gray-50 rounded-t-lg  mb-[100px]">
        <div className="flex flex-col p-10 gap-7 justify-center items-center h-full md:w-[25%]">
          <h1 className="font-bold text-2xl">About us!</h1>
          <p className="text-center">
            Crafted with Pride, Designed for Joy – Make in India Handbags! Your Perfect Handbag Awaits!
          </p>
        </div>
        <div className="flex flex-col gap-2 p-10 justify-center items-center h-full md:w-[25%] ">
          <div className="flex justify-center items-center h-16 w-16 bg-amber-200 rounded-full ">
            <span class="material-symbols-outlined">shopping_bag</span>
          </div>
          <h1 className="font-bold">Large Assortment</h1>
          <p className="text-center">
            We offer many different types of proudcts with fewer variations in
            each category
          </p>
        </div>
        <div className="flex flex-col p-10 gap-2 justify-center items-center h-full md:w-[25%]">
          <div className="flex justify-center items-center h-16 w-16 bg-amber-200 rounded-full ">
            <span class="material-symbols-outlined">local_shipping</span>
          </div>
          <h1 className="font-bold">Fasr & Free shipping</h1>
          <p className="text-center">4-day or less delivery time, free shipping and an expected delivery option</p>
        </div>
        <div className="flex flex-col p-10 gap-2 justify-center items-center h-full md:w-[25%] ">
          <div className="flex justify-center items-center h-16 w-16 bg-amber-200 rounded-full ">
            <span class="material-symbols-outlined">support_agent</span>
          </div>
          <h1 className="font-bold">24/7 Support</h1>
          <p className="text-center">answers to any bussines related inquiry 24/7 and in real-time</p>
        </div>
      </div>
    </>
  );
}

export default About;
