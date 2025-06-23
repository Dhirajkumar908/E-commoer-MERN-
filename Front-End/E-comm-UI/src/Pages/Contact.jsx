import { useState } from "react";
import API from '../api/api';
import { toast } from "react-toastify";

function Contact() {
  const [form, setForm]=useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange=(e)=>{
    e.preventDefault()
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      const res=await API.post('/contect', form)
      return toast.success(res.data.message)
    }catch(e){
      return toast.error(e.message)
    }
    console.log(form.name, form.email, form.message);
    
  }

  return (
    <div className="bg-amber-50 min-h-screen rounded-t-3xl ">
      
      <section className="flex flex-col items-center justify-center text-center bg-amber-100 py-10 sm:py-12 md:py-16 px-4 sm:px-6 rounded-t-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-900 mb-4 sm:mb-6">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto">
          We’d love to hear from you! Get in touch with us for any inquiries or support.
        </p>
      </section>

     
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-yellow-900 mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-base text-gray-700 mb-4">
              Have questions or need assistance? Reach out to us using the details below.
            </p>
            <div className="space-y-4">
              <p className="text-sm sm:text-base">
                <strong>Address:</strong> Noida, Uttar Pradesh, India
              </p>
              <p className="text-sm sm:text-base">
                <strong>Email:</strong>{" "}
                <a href="mailto:support@baggyes.com" className="text-yellow-900 hover:underline">
                  support@baggyes.com
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919999009999" className="text-yellow-900 hover:underline">
                  +91 9999009999
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>

          
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-yellow-900 mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm sm:text-base"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  id="message"
                  className="w-full p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 h-24 sm:h-32 text-sm sm:text-base"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="w-full bg-amber-300 text-yellow-900 p-2 sm:p-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-amber-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-amber-100">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-yellow-900 text-center mb-6 sm:mb-8">
          Our Location
        </h2>
        <div className="w-full h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.927811844955!2d77.39102931511294!3d28.535516982466054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43133e263%3A0x37f9416bf7e4e7f4!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1623456789!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Baggyes Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;