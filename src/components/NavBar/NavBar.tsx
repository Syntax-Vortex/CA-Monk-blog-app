import { useState } from "react";
import SearchBlog from "../Modals/SearchBlog";
import { Button } from "../ui/button";

export default function NavBar(props: any) {
    const {setSelectedBlog} = props;

    const [isOpen, setIsOpen] = useState(false);


    function handleCloseModal():void {
        setIsOpen(false);
    }

    function handleOpenModal():void {
        setIsOpen(true);
    }

    return(
        <div className="bg-white w-full flex justify-between items-center px-2 sm:px-5 py-2 border-b-2 border-gray-150 text-center ">
            <div className="text-[14px] sm:text-[22px] text-black font-bold">
                CA Monk
            </div>
            
            <div className="flex justify-center items-center text-[12px] sm:text-[16px] font-semibold text-gray-600 gap-3 ">
                <Button className="active:bg-black" onClick={handleOpenModal}>Search</Button>
                <SearchBlog isOpen = {isOpen} handleCloseModal ={handleCloseModal} setSelectedBlog={setSelectedBlog}/>

                <Button className="active:bg-black">Create Blog</Button>
            </div>
            
            <Button >Profile</Button>
        </div>
    )
}