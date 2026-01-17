import Body from "../body/Body";
import NavBar from "../NavBar/NavBar";

export default function PageLayout(props: any) {
    const {selectedBlog, setSelectedBlog} = props;

    return (
        <div className="w-full min-h-screen">
            <NavBar setSelectedBlog = {setSelectedBlog}/>

            <div className="h-screen">
                <Body selectedBlog = {selectedBlog} setSelectedBlog = {setSelectedBlog}/>
            </div>
        </div>
    )
}