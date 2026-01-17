import { formatExactDate } from "@/utils/formatExactDate";
import { Button } from "../ui/button"

export default function BlogBody(props: any) {
    const { selectedBlog: blog } = props;

    return (
        <div className="w-full h-full px-10 py-4 flex flex-col justify-start items-center overflow-y-auto overflow-x-clip">


            <img className="w-[90%] rounded-t-lg" src={blog?.coverImage} />

            <div className="bg-white flex flex-col justify-start items-cener w-[90%] rounded-b-lg py-6 px-6 gap-10">
                <div className="flex justify-between items-start">
                    <div className="flex justify-start items-center gap-4 font-bold text-violet-500 text-md">
                        {blog?.category?.map((tag: any, i: number) => {
                            return (
                                <p key={i}>{tag}</p>
                            )
                        })}
                    </div>

                    <p className="text-gray-400/70 font-semibold text-lg">Id: {blog?.id}</p>
                </div>

                <p className="text-black font-semibold text-5xl">{blog?.title}</p>

                <div>
                    <Button className="bg-violet-500 text-white hover:bg-violet-700 active:bg-violet-900">Share article
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                    </Button>
                </div>

                <div className="w-full bg-gray-300/40 flex justify-center items-center py-3 border-3 border-gray-300/30 rounded-lg">
                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3">
                        <p className="text-black/50">Category</p>

                        <p className="text-m font-semibold text-black">
                            {blog?.category?.join(" ")}
                        </p>
                    </div>

                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3 border-l-3 border-r-3 border-gray-300/40">
                        <p className="text-black/50">Date</p>

                        <p className="text-lg text-black">{formatExactDate(blog?.date)}</p>
                    </div>

                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3">
                        <p className="text-black/50">ID</p>

                        <p className="text-xl  text-black">{blog?.id}</p>
                    </div>
                </div>

                <div className="text-lg font-medium">
                    {blog?.description}
                </div>

                <div className="text-lg">
                    {blog?.content}
                </div>
            </div>
        </div>
    )
}