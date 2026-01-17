import { useGetAllBlogs } from "@/hooks/useGetAllBlogs";
import SmallBlogCard from "../card/SmallBlogCard";
import { Spinner } from "../ui/spinner";

export default function SmallBlogList(props: any) {
    const { data, isLoading, isError, error } = useGetAllBlogs();
    const {selectedBlog, setSelectedBlog} = props;

    if (isLoading) <Spinner className="md:hidden size-16"/>
    if (isError) return <p>{(error as Error).message}</p>

    return (
        <div className="h-full overflow-y-scroll overflow-x-clip flex-col gap-6 sleek-scrollbar px-2 flex md:hidden">
            {data?.map((blog) => (
                <SmallBlogCard key = {blog.id} blog = {blog} setSelectedBlog = {setSelectedBlog} selectedBlog = {selectedBlog}/>
            ))}
        </div>
    )
}