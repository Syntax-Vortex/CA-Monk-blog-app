import { useState } from "react";
import { useGetAllBlogs } from "./useGetAllBlogs";
import type { Blog } from "@/types/blog";

export const useSearchBlog = () => {
  const { data, isLoading } = useGetAllBlogs();
  const [searchedBlog, setSearchedBlog] = useState<Blog | null>(null);

  const searchBlog = (id: number) => {
    if (!data) {
      setSearchedBlog(null);
      return;
    }

    const b = data.find((blog) => Number(blog.id) === id) ?? null;
    setSearchedBlog(b);
  };

  const found = searchedBlog !== null;

  return { searchedBlog, found, isLoading, searchBlog };
};
