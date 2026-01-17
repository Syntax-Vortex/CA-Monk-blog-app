import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InputGroup, InputGroupAddon, InputGroupInput, } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchBlog } from "@/hooks/useSearchBlog";

export default function SearchBlog(props: any) {
    const { isOpen, handleCloseModal, setSelectedBlog } = props;

    const [mounted, setMounted] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [value, setValue] = useState('');
    const { searchedBlog, found, isLoading, searchBlog } = useSearchBlog();


    function close() {
        setInvalid(false);
        setValue('');
        handleCloseModal();
    }

    function search() {
        const isValid = value !== "" && Number.isFinite(Number(value));
        setInvalid(!isValid);
        if (!isValid) {
            return;
        }

        searchBlog(Number(value));
    }

    useEffect(() => {
        if (!isLoading && found && searchedBlog) {
            setSelectedBlog(searchedBlog.id);
            close();
        }else{
            setInvalid(true);
        }
    }, [isLoading, found, searchedBlog]);


    useEffect(() => {
        if (isOpen) setMounted(true);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen && mounted) {
            const t = setTimeout(() => setMounted(false), 700);
            return () => clearTimeout(t);
        }
    }, [isOpen, mounted]);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <div className={`h-screen w-screen fixed top-0 left-0 flex justify-center items-start pt-20 transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={close}>
            <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-200/20 transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} />

            <div className={`relative w-[90%] max-w-140 bg-white flex flex-col justify-start items-center rounded-xl pb-6 pt-2 border-2 border-gray-300 gap-6 transition-all duration-200 ease-out ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-3 scale-[0.98]"}`}
                onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-end items-center w-full px-2" onClick={close}>
                    <svg className="size-6 text-black/80 hover:text-black/50 active:text-black duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </div>

                <div className="w-[70%] flex flex-col items-center">
                    <InputGroup>
                        <InputGroupInput placeholder="Search Using Blog ID" value={value} onChange={(e) => setValue(e.target.value)} />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>

                    <p className={"text-red-500 opacity-0 duration-100" + (invalid ? ' opacity-100' : '')}>Please enter a valid Id!</p>
                </div>


                <Button onClick={search}>Search</Button>
            </div>
        </div>,
        document.getElementById("portal")!
    );
}
