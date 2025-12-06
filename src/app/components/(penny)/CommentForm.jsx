"use client";

const CommentForm = ({ id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      content: formData.get("comment"),
      blogpostId: id,
      date: new Date().toISOString(),
    };

    console.log("Posting comment for blog post ID:", id);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "http://localhost:4000/comments?content-Type=application/json",
      options,
    );
  };

  return (
    <>
      <h2 className="mt-[86px] mb-11 text-[32px] font-bold uppercase">
        Leave a comment
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-8 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
            />
          </div>
          <textarea
            name="comment"
            placeholder="Your Comment"
            className="border-foreground text-foreground placeholder:text-foreground h-32 min-h-80 w-full border px-3 py-[18px] md:px-6 md:py-8"
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5"
          >
            <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
              Submit
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
