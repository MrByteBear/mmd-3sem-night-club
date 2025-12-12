"use client";

import { useForm } from "react-hook-form";

const SubscribeReactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    // default values for testing purposes
    defaultValues: { email: "test@email.com" },
  });

  // when form is submitted
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Subscription failed. Please try again.",
      });
    }
  };
  return (
    <div className="col-start-1 col-end-4 flex w-full flex-col items-center justify-center bg-black pt-16 text-white">
      <h1 className="tracking-widest uppercase">
        want the latest night club news
      </h1>
      <h2 className="-tracking-wider">
        Subscribe to our newsletter and never miss an{" "}
        <span className="text-accent">Event</span>
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col justify-center gap-4 md:flex-row"
      >
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
          })}
          className="border-b-2 border-white"
          type="text"
          placeholder="Enter Your Email"
        />
        {/* errormessage for emails */}
        {errors.email && (
          <div className="text-sm text-red-500">{errors.email.message} </div>
        )}
        <button
          className="border-t-2 border-b-2 px-10 py-3 text-sm font-semibold tracking-wide uppercase transition hover:bg-pink-600 hover:text-black"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
        {errors.root && (
          <div className="text-sm text-red-500">{errors.root.message} </div>
        )}
      </form>
    </div>
  );
};

export default SubscribeReactForm;
