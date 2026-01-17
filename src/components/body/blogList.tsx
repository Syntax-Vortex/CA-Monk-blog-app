import BlogCard from "../card/BlogCard";

export default function BlogList() {
    return (
        <div className="w-full h-full overflow-y-scroll overflow-x-clip flex flex-col gap-6 sleek-scrollbar px-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}