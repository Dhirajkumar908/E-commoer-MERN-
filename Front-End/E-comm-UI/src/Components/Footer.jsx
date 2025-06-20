function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-amber-200 py-6 sm:py-8 md:py-10 mt-4 sm:mt-6">
        
        <div className="flex flex-col justify-center items-center w-full md:w-[30%] gap-2 sm:gap-3 p-4 sm:p-5">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center">
            Baggyes
          </h1>
        </div>

       
        <div className="flex flex-col items-center sm:items-start  w-full md:w-[30%] gap-2 sm:gap-3 p-4 sm:p-5">
          <p className="text-sm sm:text-base">
            <strong>Address: </strong> Noida, Uttar Pradesh
          </p>
          <p className="text-sm sm:text-base">
            <strong>Email: </strong>{" "}
            <a href="mailto:support@baggyes.com" className="hover:underline">
              support@baggyes.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <strong>Phone: </strong>{" "}
            <a href="tel:+919999009999" className="hover:underline">
              9999009999
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <strong>Website: </strong>{" "}
            <a href="http://www.baggyes.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.baggyes.com
            </a>
          </p>
        </div>

       
        <div className="flex flex-col  items-center sm:items-start w-full md:w-[30%] gap-2 sm:gap-3 p-4 sm:p-5">
          <p className="text-sm sm:text-base">
            <a href="/privacy-policy" className="hover:underline">
              <strong>Privacy Policy</strong>
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="/terms-and-conditions" className="hover:underline">
              <strong>Terms and Conditions</strong>
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="/services" className="hover:underline">
              <strong>Services</strong>
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="/about" className="hover:underline">
              <strong>About</strong>
            </a>
          </p>
        </div>
      </div>

     
      <div className="py-3 bg-amber-800">
        <p className="text-center text-white text-xs sm:text-sm">
          Copyright © {year} Baggyes. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;