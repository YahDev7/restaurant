import Header from "../public/header";
import Social from "../public/social";
import Banner from "./Banner";
import Categorias from "./Categorias";
import Extra from "./Extra";
import Tops from "./Tops";

const Home = () => {
    return (
        <div>
            <Header></Header> 
            <Banner></Banner>
             <Social></Social>  
            <Extra></Extra>
            <Categorias></Categorias> 
            <Tops></Tops> 

        </div>
    );
}

export default Home;