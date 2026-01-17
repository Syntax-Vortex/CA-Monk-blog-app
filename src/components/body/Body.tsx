import BlogBody from "../BlogBody/BlogBody";
import BlogList from "./blogList";

export default function Body() {
    return (
        <div className="bg-gray-100 h-full w-full flex">

            <div className="w-[30%] h-full py-4 px-2">
                <BlogList />
            </div>

            <div className="flex-1 h-full">
                <BlogBody />
            </div>

        </div>
    )
}