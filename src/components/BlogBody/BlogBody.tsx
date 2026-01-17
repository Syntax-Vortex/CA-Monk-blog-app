import { formatExactDate } from "@/utils/formatExactDate";
import { Button } from "../ui/button"

export default function BlogBody(props: any) {
    const { selectedBlog: blog } = props;

    return (
        <div className="w-full h-full px-0 md:px-6 lg:px-10 py-4 flex flex-col justify-start items-center overflow-y-auto overflow-x-clip sleek-scrollbar">


            <img className="w-[90%] rounded-t-lg" src={blog?.coverImage} />

            <div className="bg-white flex flex-col justify-start items-cener w-[90%] rounded-b-lg py-6 px-6 gap-4 sm:gap-10">
                <div className="flex justify-between items-start">
                    <div className="flex justify-start items-center gap-4 font-bold text-violet-500 text-md flex-wrap">
                        {blog?.category?.map((tag: any, i: number) => {
                            return (
                                <p key={i}>{tag}</p>
                            )
                        })}
                    </div>

                    <p className="text-gray-400/70 font-semibold text-lg text-nowrap">Id: {blog?.id}</p>
                </div>

                <p className="text-black font-semibold text-2xl sm:text-5xl">{blog?.title}</p>

                <div>
                    <Button className="bg-violet-500 text-white hover:bg-violet-700 active:bg-violet-900">Share article
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                    </Button>
                </div>

                <div className="w-full bg-gray-300/40 rounded-lg border border-gray-300/30 py-3 px-2">
                    <div className="flex flex-col sm:flex-row sm:items-stretch">
                        <div className="flex-1 flex flex-col items-center justify-center gap-1 py-2">
                            <p className="text-black/50 text-sm">Category</p>
                            <p className="text-xs sm:text-lg font-semibold text-black text-center wrap-break-word px-2">
                                {blog?.category?.join(" ")}
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-1 py-2 border-t border-gray-300/40 sm:border-t-0 sm:border-l sm:border-r">
                            <p className="text-black/50 text-sm">Date</p>
                            <p className="text-sm sm:text-lg font-semibold text-black text-center px-2">
                                {blog?.date ? formatExactDate(blog.date) : "-"}
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-1 py-2 border-t border-gray-300/40 sm:border-t-0">
                            <p className="text-black/50 text-sm">ID</p>
                            <p className="text-base sm:text-xl font-semibold text-black text-center px-2">
                                {blog?.id ?? "-"}
                            </p>
                        </div>
                    </div>
                </div>


                <div className="text-md sm:text-lg font-medium">
                    {blog?.description}
                </div>

                <div className="text-md sm:text-lg">
                    {blog?.content}
                </div>
            </div>
        </div>
    )
}