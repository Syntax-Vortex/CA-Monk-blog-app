import Body from "../body/Body";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

export default function PageLayout() {
    return(
        <div className="w-full h-screen">
            <NavBar />
            <Header />
            <Body />
        </div>
    )
}