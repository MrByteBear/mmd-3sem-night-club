"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Paginator({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // Hide paginator if there's only 1 page
  if (totalPages <= 1) {
    return null;
  }

  
  function handleClick(pageNum) {
    router.push(`/blog?page=${pageNum}`);
  }

  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <li key={pageNum}>
          <button
            onClick={() => handleClick(pageNum)}
            className={`cursor-pointer ${currentPage === pageNum ? "text-accent font-bold" : ""}`}
          >
            {pageNum}
          </button>
        </li>
      ))}
    </>
  );
}
