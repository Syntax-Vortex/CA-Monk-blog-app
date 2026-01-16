import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function Body() {
    return (
        <div className="bg-gray-300 h-full w-full flex">

            <div className="w-[30%] bg-black p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Future of Fintech</CardTitle>
                        <CardDescription>Finance</CardDescription>
                        <CardAction>2 days ago</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>blah blaah blahblahah bblahblah blahblah blahblah blahblah blahblah blah</p>
                    </CardContent>
                    <CardFooter>
                        <div className="px-2 py-1 bg-gray-200 rounded-2xl text-[14px]">Featured</div>
                    </CardFooter>
                </Card>
            </div>


        </div>
    )
}