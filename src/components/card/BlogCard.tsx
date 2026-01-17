import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function BlogCard() {
    return (
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
    )
}