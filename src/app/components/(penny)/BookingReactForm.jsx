"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "@/app/components/(penny)/ReactDatePicker";
import SubmitButton from "@/app/components/(Meleese)/buttons/Submit";

const BookingReactForm = ({ selectedTable }) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  // Base input styling
  const base = "bg-transparent border px-4 py-3 text-sm outline-red-400 w-full";
  const errorStyle = "mt-1 text-xs text-red-400";

  // when form is submitted, handleSubmit calls onSubmit function
  const onSubmit = async (data) => {
    try {
      setSuccess(false);

      // Validate selected table
      if (!selectedTable) {
        setError("table", {
          message: "Please select a table",
        });
        return;
      }

      // Validate number of guests
      const guests = Number(data.guests);
      if (!Number.isFinite(guests) || guests <= 0) {
        setError("guests", {
          message: "Please enter a valid number of guests",
        });
        return;
      } else if (guests > 78) {
        setError("guests", {
          message: "Our maximum capacity is 78 guests",
        });
        return;
      }

      // Add table number to data
      const bookingData = {
        ...data,
        tableNumber: selectedTable,
      };

      // Add a small delay to show the submitting state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // push data to api
      const response = await fetch("http://localhost:4000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        setError("root", {
          message: "Booking submission failed. Please try again.",
        });
        return;
      }

      // If submission succeeds - show success message
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);

      // if error occurs during fetch catch it and show error message
    } catch (error) {
      setError("root", {
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  // rendering the component

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-xl font-bold tracking-wide uppercase">
        Book a table
      </h2>

      {/* Booking form */}
      <form
        className="grid gap-4 md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            {...register("name", {
              // if input is empty - show error message
              required: "Name is required",
              validate: (value) => {
                // input cannot contain numbers - if it does show error message
                if (/\d/.test(value)) {
                  return "Name cannot contain numbers";
                }
                return true;
              },
            })}
            type="text"
            placeholder="Your Name*"
            className={`${base} ${
              errors.name ? "border-red-500" : "border-white"
            }`}
          />
          {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register("email", {
              // if input is empty - show error message
              required: "Email is required",
              validate: (value) => {
                // input must live up to expectations - if not show error message
                if (!/^\S+@\S+\.\S+$/.test(value)) {
                  return "Please enter a valid email address";
                }
                return true;
              },
            })}
            placeholder="Your Email*"
            className={`${base} ${
              errors.email ? "border-red-500" : "border-white"
            }`}
          />
          {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* TABLE (from selection) */}
        <div>
          <input
            {...register("table", {
              // if input is empty - show error message
              required: "Table selection is required",
              validate: () => (selectedTable ? true : "Please select a table"),
            })}
            readOnly
            className={`${base} ${
              errors.table ? "border-red-500" : "border-white"
            }`}
            value={
              selectedTable ? `Table Number: ${selectedTable}` : "Table Number*"
            }
          />
          {errors.table && <p className={errorStyle}>{errors.table.message}</p>}
        </div>

        <div>
          <input
            {...register("guests", {
              required: "Please enter number of guests",
            })}
            type="number"
            placeholder="Number of Guests*"
            className={`${base} ${
              errors.guests ? "border-red-500" : "border-white"
            }`}
          />
          {errors.guests && (
            <p className={errorStyle}>{errors.guests.message}</p>
          )}
        </div>

        <div className="w-full">
          <Controller
            name="date"
            control={control}
            rules={{ required: "Please select a date" }}
            render={({ field }) => (
              <DatePicker
                value={field.value}
                onChange={field.onChange}
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <div>
          <input
            {...register("contact", {
              required: "Please enter your contact number",
            })}
            type="tel"
            placeholder="Your Contact Number*"
            className={`${base} ${
              errors.contact ? "border-red-500" : "border-white"
            }`}
          />
          {errors.contact && (
            <p className={errorStyle}>{errors.contact.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <textarea
            {...register("comment")}
            placeholder="Your Comment"
            className={`min-h-32 w-full border border-white bg-transparent px-4 py-3 text-sm outline-red-400 md:col-span-2`}
          />
        </div>

        <SubmitButton />

        {/* Success message */}
        {success && (
          <p className="text-accent mt-4 text-center text-sm font-semibold tracking-wide uppercase md:col-span-2">
            Your booking has been sent!
          </p>
        )}

        {/* Error messages */}
        {errors.root && (
          <p className={`${errorStyle} md:col-span-2`}>{errors.root.message}</p>
        )}
      </form>
    </div>
  );
};

export default BookingReactForm;
