import { Button } from "../ui/button"

export default function BlogBody() {
    return (
        <div className="w-full h-full px-10 py-4 flex flex-col justify-start items-center overflow-y-auto overflow-x-clip">

            
            <img className="w-[90%] rounded-t-lg" src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"/>

            <div className="bg-white flex flex-col justify-start items-cener w-[90%] rounded-b-lg py-6 px-6 gap-10">
                <div className="flex justify-between items-start">
                    <p className="text-violet-500 font-semibold text-lg">Finance</p>

                    <p className="text-gray-400/70 font-semibold text-lg">Id: 1</p>
                </div>

                <p className="text-black font-semibold text-5xl">Future of Fintech</p>

                <div>
                    <Button className="bg-violet-500 text-white hover:bg-violet-700 active:bg-violet-900">Share article 
                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                    </Button>
                </div>

                <div className="w-full bg-gray-300/40 flex justify-center items-center py-3 border-3 border-gray-300/30 rounded-lg">
                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3">
                        <p className="text-black/50">Category</p>

                        <p className="text-xl  text-black">Finance</p>
                    </div>

                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3 border-l-3 border-r-3 border-gray-300/40">
                        <p className="text-black/50">Date</p>

                        <p className="text-lg text-black">17 jan, 2026</p>
                    </div>

                    <div className="h-15 flex flex-col items-center justify-evenly font-semibold flex-1/3">
                        <p className="text-black/50">ID</p>

                        <p className="text-xl  text-black">1</p>
                    </div>
                </div>

                <div className="text-lg font-medium">
                    Exploring how AI and blockchain are reshaping financial services and what it means for the accounting profession
                </div>

                <div className="text-lg">
                    {"Fintech is no longer a buzzword—it is a structural shift in how financial services operate. Technologies such as artificial intelligence, blockchain, and cloud computing are redefining payments, lending, auditing, and compliance. AI-driven analytics now automate tasks that once required teams of accountants, enabling faster insights and fewer errors. Blockchain, on the other hand, introduces transparency and immutability, reducing fraud and improving trust in financial records.\n\nFor accounting and finance professionals, this shift demands adaptation. Understanding data analytics, digital ledgers, and automated compliance tools is becoming as important as traditional accounting standards. Fintech platforms are also making financial services more accessible, allowing small businesses and individuals to manage finances with tools previously reserved for large corporations.\n\nHowever, this evolution also raises challenges. Data privacy, cybersecurity, and regulatory alignment remain critical concerns. Professionals must balance innovation with compliance while ensuring ethical use of technology. Those who proactively upskill and embrace digital transformation will find themselves better positioned in a rapidly changing financial ecosystem. Fintech is not replacing finance professionals—it is redefining their role."}
                </div>
            </div>
        </div>
    )
}