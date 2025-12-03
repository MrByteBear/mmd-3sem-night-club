import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

const BlogList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        <FetchPosts />
      </ul>
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
        <li
          key={post.id}
          className="bg-background pb-8 md:grid md:grid-cols-2 md:even:bg-red-400"
        >
          <Image
            src={post.asset.url}
            alt={post.title}
            width={1170}
            height={221}
            // somehow only way to get images from localhost to work, however it breaks optimization which is the whole point of next/image
            unoptimized={true}
            className="mb-4 h-[221px] w-full object-cover"
          />

          <div className="order-2 md:even:order-1">
            <h2 className="mt-4 text-2xl font-medium tracking-[0.48px] uppercase">
              {post.title}
            </h2>
            <p className="text-accent mt-4 font-medium tracking-[0.36px] uppercase">
              BY: {post.author} / {commentCount} comments / 16 Nov 2018
            </p>
            <p className="mt-4 text-[16px] leading-6 font-medium tracking-[0.32px]">
              {post.content}
            </p>
            <div className="flex items-center justify-center pt-6">
              <Link
                href={`/blog-post/${post.id}`}
                className="border-foreground hover:bg-foreground hover:text-background inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 px-4 py-5 transition-colors duration-300"
              >
                <p className="justify-start text-lg font-medium tracking-tight uppercase">
                  Read more
                </p>
              </Link>
            </div>
          </div>
        </li>
      );
    }),
  );
};

export default BlogList;

// todos:
// - restrict content preview length (about 450 chars (with spaces))
// - breakout pictures
