import BlogBody from "../BlogBody/BlogBody";
import BlogList from "./blogList";
import SmallBlogList from "./SmallBlogList";

export default function Body(props: any) {
    const {selectedBlog, setSelectedBlog} = props;
    
    return (
        <div className="bg-gray-100 h-full w-full flex overflow-y-auto">

            <div className="md:w-[30%] md:min-w-70 h-full py-4 px-2">
                <BlogList selectedBlog = {selectedBlog} setSelectedBlog = {setSelectedBlog}/>
                <SmallBlogList selectedBlog = {selectedBlog} setSelectedBlog = {setSelectedBlog}/>
            </div>

            <div className="flex-1 h-full">
                <BlogBody selectedBlog = {selectedBlog}/>
            </div>

        </div>
    )
}