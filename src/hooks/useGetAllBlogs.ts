import { useQuery }from "@tanstack/react-query"
import { fetchBlogs } from "@/api/blogs"
import type { Blog } from "@/types/blog"

export const useGetAllBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  })
}
