import { useState } from "react"
import PageLayout from "./components/Layout/PageLayout"
import { useGetAllBlogs } from "./hooks/useGetAllBlogs";
import type { Blog } from "@/types/blog"

function App() {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    const { data } = useGetAllBlogs();

    function setSelectedBlogId(i:number): void{
        data?.forEach(blog => {
            if(Number(blog.id) == i) setSelectedBlog(blog);
        });
    }
    
  return (
    <div className="w-full flex justify-center items-center bg-white">
        <PageLayout selectedBlog = {selectedBlog} setSelectedBlog = {setSelectedBlogId}/>
    </div>    
  )
}

export default App
