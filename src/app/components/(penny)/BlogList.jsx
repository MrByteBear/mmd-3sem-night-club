import Link from "next/link";
import Image from "next/image";
import Paginator from "./Paginator";

// Fetch all posts once
const url = "http://localhost:4000/blogposts";
const response = await fetch(url);
let posts = await response.json();
const pageSize = 3;
const totalPages = Math.ceil(posts.length / pageSize);

const BlogList = async ({ searchParams }) => {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <ul className="col-start-1 col-end-4">
        <FetchPosts page={currentPage} />
      </ul>

      <div className="flex w-full justify-center py-8">
        <ul className="flex w-[120px] justify-around">
          <Paginator totalPages={totalPages} />
        </ul>
      </div>
    </>
  );
};

const FetchPosts = async ({ page }) => {
  const paginatedPosts = posts.slice((page - 1) * pageSize, page * pageSize);

  return Promise.all(
    paginatedPosts.map(async (post) => {
      // Fetch comments to get count for each post
      const commentsResponse = await fetch(
        `http://localhost:4000/comments?blogpostId=${post.id}`,
      );
      const comments = await commentsResponse.json();
      const commentCount = Array.isArray(comments) ? comments.length : 0;

      return (
        <li
          key={post.id}
          className="bg-background md:even:grid-row-reverse grid-cols-2 pb-8 md:grid md:pb-0 md:[&:nth-child(even)>:first-child]:order-2"
        >
          <Image
            src={post.asset.url}
            alt={post.title}
            width={960}
            height={530}
            // somehow only way to get images from localhost to work, however it breaks optimization which is the whole point of next/image
            unoptimized={true}
            className="mb-4 h-[221px] w-full object-cover md:mb-0 md:h-full md:max-h-[530px]"
          />

          <div className="md:pt-12 md:pl-10">
            <h2 className="mt-4 text-2xl font-medium tracking-[0.48px] uppercase">
              {post.title} {post.id}
            </h2>
            <p className="text-accent mt-4 font-medium tracking-[0.36px] uppercase">
              BY: {post.author} / {commentCount} comments / 16 Nov 2018
            </p>
            <p className="mt-4 text-[16px] leading-6 font-medium tracking-[0.32px]">
              {/* substring works at short range, but not at long range. */}
              {post.content.substring(0, 450)}
            </p>
            <div className="flex items-center justify-center pt-6 md:justify-end">
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
// - inline text
