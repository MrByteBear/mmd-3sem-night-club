// components/Meleese/BookingForm.jsx
export default function BookingForm({ selectedTable }) {
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-xl font-bold uppercase tracking-wide">
        Book a table
      </h2>

      <form className="grid gap-4 md:grid-cols-2">
        <input

          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder="Your Name"
        />
        <input
        type="email"
          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder="Your Email"
        />

        <input
          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder={
            selectedTable ? `Table Number: ${selectedTable}` : "Table Number"
          }
        />
        <input
        type="number"
          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder="Number of Guests"
        />

        <input
            type="date"
          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder="Select Date"
        />
        <input
            type="tel"
          className="bg-transparent border border-white px-4 py-3 text-sm outline-red-400"
          placeholder="Your Contact Number"
        />

        <textarea
          className="md:col-span-2 bg-transparent border border-white px-4 py-3 text-sm outline-red-400 min-h-32"
          placeholder="Your Comment"
        />

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-10 py-3 text-sm font-semibold tracking-wide uppercase border-t-4 border-b-4 hover:bg-pink-600 hover:border-t-4 hover:border-b-4 hover:text-black transition"
          >
            Reserve
          </button>
        </div>
      </form>
    </div>
  );
}

// Below is the version with validation, which i intend to understand and use correctly in the future


// "use client";

// import { useState } from "react";

// export default function BookingForm({ selectedTable }) {
//   const [errors, setErrors] = useState({});

//   function handleSubmit(e) {
//     // e.preventDefault();

//     const formData = new FormData(e.target);
//     const newErrors = {};

//     const name = formData.get("name")?.toString().trim() ?? "";
//     const email = formData.get("email")?.toString().trim() ?? "";
//     const guestsRaw = formData.get("guests")?.toString().trim() ?? "";
//     const date = formData.get("date")?.toString().trim() ?? "";
//     const contact = formData.get("contact")?.toString().trim() ?? "";

//     // simple, user-friendly checks
//     if (!name) newErrors.name = "Skriv venligst dit navn.";
//     if (!email) newErrors.email = "Skriv venligst din e-mail.";
//     else if (!/^\S+@\S+\.\S+$/.test(email))
//       newErrors.email = "Skriv en gyldig e-mailadresse.";

//     if (!selectedTable) {
//       newErrors.table = "Vælg et bord ovenfor.";
//     }

//     if (!guestsRaw) {
//       newErrors.guests = "Angiv antal gæster.";
//     } else {
//       const guests = Number(guestsRaw);
//       if (!Number.isFinite(guests) || guests <= 0) {
//         newErrors.guests = "Antal gæster skal være et positivt tal.";
//       } else if (guests > 78) {
//         newErrors.guests = "Der kan maks. bookes 78 gæster.";
//       }
//     }

//     if (!date) newErrors.date = "Vælg dato for din booking.";
//     if (!contact) newErrors.contact = "Skriv et telefonnummer.";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // no visual “extra stuff” – just pass validation
//     setErrors({});
//     console.log("Booking OK", Object.fromEntries(formData), {
//       table: selectedTable,
//     });
//   }

//   const baseInput =
//     "bg-transparent border px-4 py-3 text-sm outline-none";

//   return (
//     <div className="mt-12 space-y-6">
//       <h2 className="text-xl font-bold uppercase tracking-wide">
//         Book a table
//       </h2>

//       <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
//         {/* NAME */}
//         <div>
//           <input
//             name="name"
//             className={`${baseInput} ${
//               errors.name ? "border-red-500" : "border-white"
//             }`}
//             placeholder="Your Name"
//           />
//           {errors.name && (
//             <p className="mt-1 text-xs text-red-400">{errors.name}</p>
//           )}
//         </div>

//         {/* EMAIL */}
//         <div>
//           <input
//             type="email"
//             name="email"
//             className={`${baseInput} ${
//               errors.email ? "border-red-500" : "border-white"
//             }`}
//             placeholder="Your Email"
//           />
//           {errors.email && (
//             <p className="mt-1 text-xs text-red-400">{errors.email}</p>
//           )}
//         </div>

//         {/* TABLE (from selection) */}
//         <div>
//           <input
//             readOnly
//             className={`${baseInput} ${
//               errors.table ? "border-red-500" : "border-white"
//             }`}
//             value={
//               selectedTable
//                 ? `Table Number: ${selectedTable}`
//                 : "Table Number"
//             }
//           />
//           {errors.table && (
//             <p className="mt-1 text-xs text-red-400">{errors.table}</p>
//           )}
//         </div>

//         {/* GUESTS */}
//         <div>
//           <input
//             type="number"
//             name="guests"
//             className={`${baseInput} ${
//               errors.guests ? "border-red-500" : "border-white"
//             }`}
//             placeholder="Number of Guests max 78"
//           />
//           {errors.guests && (
//             <p className="mt-1 text-xs text-red-400">{errors.guests}</p>
//           )}
//         </div>

//         {/* DATE */}
//         <div>
//           <input
//             type="date"
//             name="date"
//             className={`${baseInput} ${
//               errors.date ? "border-red-500" : "border-white"
//             }`}
//             placeholder="Select Date"
//           />
//           {errors.date && (
//             <p className="mt-1 text-xs text-red-400">{errors.date}</p>
//           )}
//         </div>

//         {/* CONTACT */}
//         <div>
//           <input
//             type="tel"
//             name="contact"
//             className={`${baseInput} ${
//               errors.contact ? "border-red-500" : "border-white"
//             }`}
//             placeholder="Your Contact Number"
//           />
//           {errors.contact && (
//             <p className="mt-1 text-xs text-red-400">{errors.contact}</p>
//           )}
//         </div>

//         {/* COMMENT (optional, no validation) */}
//         <div className="md:col-span-2">
//           <textarea
//             name="comment"
//             className={`md:col-span-2 bg-transparent border px-4 py-3 text-sm outline-none min-h-32 border-white`}
//             placeholder="Your Comment"
//           />
//         </div>

//         <div className="md:col-span-2 flex justify-end">
//           <button
//             type="submit"
//             className="px-10 py-3 text-sm font-semibold tracking-wide uppercase border-t-4 border-b-4 hover:bg-pink-600 hover:text-black transition"
//           >
//             Reserve
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
