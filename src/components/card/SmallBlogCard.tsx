export default function SmallBlogCard(props: any) {
    const {blog, setSelectedBlog, selectedBlog} = props;
    const isSelected = selectedBlog?.id === blog?.id;

    function changeSelectedBlog(): void{
        setSelectedBlog(blog?.id);
    }

    return (
        <div className={"w-16 h-16 bg-white font-normal text-black text-center text-2xl rounded-full flex justify-center items-center cursor-pointer border border-l-6 duration-300" + (isSelected?
                        " text-violet-400 border-violet-600" : "")} 
            onClick={changeSelectedBlog}>
            <div>
                {blog.id}
            </div>
        </div>
    )
}