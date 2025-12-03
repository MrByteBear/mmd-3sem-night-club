import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { Suspense } from "react";

const PetList = () => {
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
  return posts.map((post) => {
    return (
      <li key={post.id} className="bg-background pb-8">
        <Image
          src={post.asset.url}
          alt={post.title}
          width={1170}
          height={221}
          // somehow only way to get images from localhost to work
          unoptimized={true}
          className="mb-4 h-[221px] w-full object-cover"
        />

        <h2 className="mt-4 text-2xl font-medium tracking-[0.48px] uppercase">
          {post.title}
        </h2>
        <p className="text-accent mt-4 font-medium tracking-[0.36px] uppercase">
          BY: {post.author} / 3 Comments / 16 Nov 2018
        </p>
        <p className="mt-4 text-[16px] leading-6 font-medium tracking-[0.32px]">
          {post.content}
        </p>

        <Link href={`/blog-post/${post.id}`}>
          <div className="flex items-center justify-center pt-6">
            <div className="border-foreground inline-flex w-44 items-center justify-center gap-2.5 border-t-2 border-b-2 px-4 py-5">
              <div className="justify-start text-lg font-medium tracking-tight uppercase">
                Read more
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  });
};

export default PetList;
