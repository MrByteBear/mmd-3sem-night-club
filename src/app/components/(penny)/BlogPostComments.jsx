import { Suspense } from "react";

const BlogPostComments = ({ id, commentCount }) => {
  console.log("BlogPostComments received id:", id);
  return (
    <>
      <h2 className="mt-[89px] mb-11 pl-3 text-[32px] font-bold uppercase">
        {commentCount} comment{commentCount !== 1 ? "s" : ""}
      </h2>
      <Suspense fallback={<div>Loading comments...</div>}>
        <ul>
          <FetchComments id={id} />
        </ul>
      </Suspense>
    </>
  );
};

const FetchComments = async ({ id }) => {
  console.log("Fetching comments for blog post ID:", id);
  const url = `http://localhost:4000/comments?blogpostId=${id}`;
  const response = await fetch(url, { cache: "no-store" });
  const comments = await response.json();

  if (!Array.isArray(comments) || comments.length === 0) {
    return <div>No comments yet</div>;
  }

  return comments.map((post) => {
    const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return (
      <li key={post.id} className="mb-[54px] pb-8">
        <h3 className="mb-6 text-[18px] font-medium tracking-[0.36px]">
          {post.name} -
          <span className="text-accent text-[16px] tracking-[0.32px]">
            {" "}
            {formattedDate}
          </span>
        </h3>
        <p className="text-[16px] font-medium tracking-[0.32px]">
          {post.content}
        </p>
      </li>
    );
  });
};

export default BlogPostComments;
