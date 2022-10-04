import Banner from "./partials/Banner/Banner";
import Navbar from "./partials/Navbar/Navbar";

function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <h1>Hello, here it's the Home Page :)</h1>
        </>
    )
};

export default Home;