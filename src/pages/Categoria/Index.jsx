import SidebarCarrito from "../../components/Sidebar/Sidebar.carrito";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../public/header";
import Categoria from "./Categoria";

const IndexCategoria = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <SidebarCarrito></SidebarCarrito>

            <Header></Header>
            <Categoria />
        </div>

    );
}

export default IndexCategoria;