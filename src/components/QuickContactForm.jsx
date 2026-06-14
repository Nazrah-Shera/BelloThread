import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser";

const QuickContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_q5ovesp",
        "template_jpr0r8f",
        form.current,
        "bwT--djj8JUi_xHfn"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      })
      .finally(() => setLoading(false));
  };


  return (
    <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000" >
      <h2 className="text-base/7 font-semibold! text-gray-900">Quick Contact Form</h2>


     <form ref={form} onSubmit={sendEmail} className="mt-4 grid grid-cols-1 gap-y-4">

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-4">
        <div className="sm:col-span-full">
          <label htmlFor="first-name" className="block text-sm/6 font-medium! text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name" type="text" name="name"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Email</label>
          <div className="mt-2">
            <input id="email" type="email" name="email"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="subject" className="block text-sm/6 font-medium! text-gray-900">Subject</label>
          <div className="mt-2">
            <input id="subject" type="subject" name="subject" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>



        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm/6 font-medium! text-gray-900">Message</label>
          <div className="mt-2">
            <textarea id="message" name="message" rows="4" placeholder="your message..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>


        <button type="submit"   disabled={loading} className="col-span-full w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold! text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> {loading ? "Sending..." : "Submit"}</button>

        <p className="col-span-full text-xs text-center">htmlFor bulk orders, please use our <Link to="/ordernow" className="nav-link"> <a href='' className='text-blue-500  hover:text-blue-700'>order form</a> </Link></p>
      </div>

</form>
    </div>
  )
}

export default QuickContactForm
