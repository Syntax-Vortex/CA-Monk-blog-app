export default function NavBar() {
    return(
        <div className="bg-white w-full flex justify-between items-center px-2 sm:px-5 py-2 border-b-2 border-gray-150 text-center fixed">
            <div className="text-[14px] sm:text-[22px] text-black font-bold">
                CA Monk
            </div>
            
            <div className="flex justify-center items-center text-[12px] sm:text-[16px] font-semibold text-gray-600 gap-3 sm:gap-10 ">
                <button className="border-b-2 border-black/0 hover:border-black duration-150 active:text-black cursor-pointer">Home</button>
                <button className="border-b-2 border-black/0 hover:border-black duration-150 active:text-black cursor-pointer">Events</button>
                <button className="border-b-2 border-black/0 hover:border-black duration-150 active:text-black cursor-pointer">Job Board</button>
                <button className="border-b-2 border-black/0 hover:border-black duration-150 active:text-black cursor-pointer">About</button>
            </div>
            
            <button className="text-[12px] sm:text-[16px] text-gray-100 font-bold bg-black py-2 px-4 rounded-xl hover:bg-black/90
                    active:bg-black/70 duration-150 cursor-pointer">
                Profile
            </button>
        </div>
    )
}