import { timeAgo } from "@/utils/timeAgo";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function BlogCard(props: any) {
    const {blog, setSelectedBlog, selectedBlog} = props;
    const isSelected = selectedBlog?.id === blog?.id;

    function changeSelectedBlog(): void{
        setSelectedBlog(blog?.id);
    }
    return (
        <Card className={"cursor-pointer hover:scale-[1.01] duration-300 border-l-6" + (isSelected? ' border-violet-700' : '')} onClick={changeSelectedBlog}>
            <CardHeader>
                <CardTitle>{blog?.title}</CardTitle>
                <CardDescription className={isSelected? 'text-violet-500 font-medium' : ''}>{blog?.category[0]}</CardDescription>
                <CardAction>{timeAgo(blog?.date)}</CardAction>
            </CardHeader>
            <CardContent>
                <p>{blog?.description}</p>
            </CardContent>
            <CardFooter className="flex justify-start items-center gap-2">
                {blog?.category.map((tag: string, i:number) => {
                    return(
                        <div className={"px-2 py-1 bg-gray-200 rounded-2xl text-[14px]" + (isSelected? ' bg-violet-200 text-violet-700':'')} key = {i}>{tag}</div>
                    )
                })}
                
            </CardFooter>
        </Card>
    )
}