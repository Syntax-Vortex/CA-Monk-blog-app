import type { JSX } from "react";

export default function Header():JSX.Element {
    return(
        <div className="h-1/5 sm:h-1/3 w-full my-10 sm:my-14 text-black flex flex-col justify-center items-center gap-3 text-center">
            <p className="font-bold text-5xl">CA Monk Blog</p>
            <p className="text-xl text-black/50 font-semibold">Stay updated with the latest trends in finance, accounting and career growth</p>
        </div>
    )
}