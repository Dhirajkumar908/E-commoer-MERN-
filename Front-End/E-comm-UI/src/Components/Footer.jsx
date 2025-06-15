function Footer(){
    const year=new Date().getFullYear()
    return(<>
    <div className="flex justify-between bg-amber-200 py-10 mt-6">
        <div className="flex flex-col justify-center items-center w-[30%] gap-3 p-5 ">
            <h1 className="text-3xl font-bold ">Baggyes</h1>
        </div>
        <div className="flex flex-col w-[30%] gap-3 p-5 ">
            <p><strong>Address:-</strong> Noida, Uttar Pradesh</p>
            <p><strong>Email:-</strong> Support@baggyes.com</p>
            <p><strong>Phone:-</strong> 9999009999</p>
            <p><strong>Website:-</strong>www.bagyyes.com</p>
        </div>
        <div className="flex flex-col w-[30%] gap-3 p-5 ">
            <p><strong>Privacy Policy </strong></p>
             <p><strong>Terms and Conditions </strong></p>
              <p><strong>Services </strong></p>
               <p><strong>About </strong></p>
        </div>
    </div>
    <div className=" py-3 bg-amber-800">
        <p className="text-center text-white">Copyright © {year} baggyes. All rights reserved. </p>
    </div>
    </>)
}

export default Footer;