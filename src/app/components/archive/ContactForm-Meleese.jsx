"use client";

import { useState } from "react";
import SubmitButton from "@/app/components/(Meleese)/buttons/Submit";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    // Prevent the form from going back to blank instantly
    e.preventDefault();

    const form = new FormData(e.target);

    // Get form values
    const name = form.get("name")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const comment = form.get("comment")?.toString().trim() ?? "";

    const newErrors = {};

    // if no name or email, show error messages
    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Please enter a valid email address";


    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

  }

//   to make the input tags to take tailwind classnames, I created a base variable
  const base =
    "bg-transparent border px-4 py-3 text-sm  outline-red-400 w-full";

    return ( 
    <div>
        <form className="flex flex-col gap-4 max-w-md m-auto" onSubmit={handleSubmit}>
       <div>
          <input
            name="name"
            className={`${base} ${
              errors.name ? "border-red-500" : "border-white"
            }`}
            placeholder="Your Name*"
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
          <input
            name="email"
            type="email"
            className={`${base} ${
              errors.email ? "border-red-500" : "border-white"
            }`}
            placeholder="Your Email*"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        <textarea 
        className=" bg-transparent border border-white px-4 py-3 text-sm outline-red-400 min-h-32" 
        placeholder="Your Comment" 
        />

        <SubmitButton />
{/* 
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-10 py-3 text-sm font-semibold tracking-wide uppercase border-t-4 border-b-4 hover:bg-pink-600 hover:border-t-4 hover:border-b-4 hover:text-black transition"
          >
            Send
          </button>
        </div> */}
          </form>

    </div>  
    );
}
 
export default ContactForm;