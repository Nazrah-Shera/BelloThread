import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const QuickContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: zodResolver(contactSchema),
});

  const sendEmail = (e) => {
    // e.preventDefault();
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
        reset();
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


     <form ref={form} onSubmit={handleSubmit(sendEmail)}  className="mt-4 grid grid-cols-1 gap-y-4">

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-4">
        <div className="sm:col-span-full">
          <label htmlFor="first-name" className="block text-sm/6 font-medium! text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name" type="text" {...register("name")}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Email</label>
          <div className="mt-2">
            <input id="email" type="email" {...register("email")}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="subject" className="block text-sm/6 font-medium! text-gray-900">Subject</label>
          <div className="mt-2">
            <input id="subject" type="subject" {...register("subject")} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
          {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>}
        </div>



        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm/6 font-medium! text-gray-900">Message</label>
          <div className="mt-2">
            <textarea id="message" rows="4" placeholder="your message..." {...register("message")}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>


        <button type="submit"   disabled={loading} className="col-span-full w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold! text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> {loading ? "Sending..." : "Submit"}</button>

        <p className="col-span-full text-xs text-center">htmlFor bulk orders, please use our <Link to="/ordernow" className="nav-link"> <a href='' className='text-blue-500  hover:text-blue-700'>order form</a> </Link></p>
      </div>

</form>
    </div>
  )
}

export default QuickContactForm
