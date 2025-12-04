import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

const RecentBlog = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="md:grid md:grid-cols-3 md:gap-8">
        <FetchPosts />
      </div>
    </Suspense>
  );
};

const FetchPosts = async () => {
  const url = "http://localhost:4000/blogposts";
  const response = await fetch(url);
  const posts = await response.json();

  return Promise.all(
    posts.map(async (post) => {
      // Fetch comments to get count for each post
      const commentsResponse = await fetch(
        `http://localhost:4000/comments?blogpostId=${post.id}`,
      );
      const comments = await commentsResponse.json();
      const commentCount = Array.isArray(comments) ? comments.length : 0;

      return (
        <article key={post.id} className="grid">
          <Link href={`/blog-post/${post.id}`}>
            <Image
              src={post.asset.url}
              alt={post.title}
              width={459}
              height={240}
              // somehow only way to get images from localhost to work, however it breaks optimization which is the whole point of next/image
              unoptimized={true}
              className="mb-4 h-[221px] w-full object-cover md:mb-0 md:max-h-60"
            />

            <div className="md:pt-12 md:pl-10">
              <h2 className="mt-4 text-2xl font-medium tracking-[0.48px] uppercase">
                {post.title}
              </h2>
              <p className="text-accent mt-4 font-medium tracking-[0.36px] uppercase">
                BY: {post.author} / {commentCount} comments / 16 Nov 2018
              </p>
              <p className="mt-4 text-[16px] leading-6 font-medium tracking-[0.32px]">
                {/* substring works at short range, but not at long range. */}
                {post.content.substring(0, 125)}
              </p>
            </div>
          </Link>
        </article>
      );
    }),
  );
};

export default RecentBlog;
