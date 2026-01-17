import { useGetAllBlogs } from "@/hooks/useGetAllBlogs";
import BlogCard from "../card/BlogCard";

export default function BlogList(props: any) {
    const {selectedBlog, setSelectedBlog} = props;

    const { data, isLoading, isError, error } = useGetAllBlogs();

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{(error as Error).message}</p>

    return (
        <div className="w-full h-full overflow-y-scroll overflow-x-clip flex-col gap-6 sleek-scrollbar px-2 hidden md:flex">
            {data?.map((blog) => (
                <BlogCard key = {blog.id} blog = {blog} setSelectedBlog = {setSelectedBlog} selectedBlog = {selectedBlog}/>
            ))}
        </div>
    )
}