import SidebarCarrito from "../../components/Sidebar/Sidebar.carrito";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../public/header";
import Product from "./Product";

const IndexProduct = () => {
    return (
        <div>
            <SidebarCarrito></SidebarCarrito>          
        <Sidebar></Sidebar>
        <Header></Header>
        <Product></Product>
        </div>
        
    );
}

export default IndexProduct;