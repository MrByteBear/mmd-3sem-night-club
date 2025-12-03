import { Suspense } from "react";
const BlogPostComments = ({ id, commentCount }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2 className="mb-11 pl-3 text-[32px] font-bold uppercase">
        {commentCount} comment{commentCount !== 1 ? "s" : ""}
      </h2>
      <ul>
        <FetchComments id={id} />
      </ul>
      <h2 className="mt-[86px] mb-11 text-[32px] font-bold uppercase">
        Leave a comment
      </h2>
      <form>
        <div className="mt-8 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-foreground text-foreground placeholder:text-foreground w-full border px-3 py-[18px] md:px-6 md:py-8"
            />
          </div>
          <textarea
            placeholder="Your Comment"
            className="border-foreground text-foreground placeholder:text-foreground h-32 min-h-80 w-full border px-3 py-[18px] md:px-6 md:py-8"
          ></textarea>
        </div>

        <div className="mt-4 flex justify-end">
          <div className="inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 border-white px-4 py-5">
            <div className="justify-start font-['Ubuntu'] text-lg font-medium tracking-tight text-white uppercase">
              Submit
            </div>
          </div>
        </div>
      </form>
    </Suspense>
  );
};

const FetchComments = async ({ id }) => {
  const url = `http://localhost:4000/comments?blogpostId=${id}`;
  const response = await fetch(url);
  const comments = await response.json();

  if (!Array.isArray(comments) || comments.length === 0) {
    return <div>No comments yet</div>;
  }

  return comments.map((post) => {
    return (
      <article key={post.id} className="bg-background mb-[54px] pb-8">
        <h3 className="mb-6 text-[18px] font-medium tracking-[0.36px]">
          {post.name} -
          <span className="text-accent text-[16px] tracking-[0.32px]">
            {" "}
            {post.date}
          </span>
        </h3>
        <p className="text-[16px] font-medium tracking-[0.32px]">
          {post.content}
        </p>
      </article>
    );
  });
};

export default BlogPostComments;
