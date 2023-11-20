
import { useContext } from "react";
import SidebarCarritoContext from "../../context/sidebarCarrito.context";
import { UseColors } from "../../hooks/Colors";
import Detalle from "../Carrito/Detalle";
import ItemsSidebar from "../Carrito/items.sidebar";
import { UseRedirect } from "../../hooks/redirects";

const SidebarCarrito = () => {
    const {ToogleSidebarCarrito,openCarrito} = useContext(SidebarCarritoContext)
    const {redirectCarrito} =UseRedirect()
    return (
        <div className={`bg-[rgb(85,85,85,50%)] top-0 z-50 w-[100%] ${openCarrito ? "block transition-all" : "hidden"}  fixed bottom-0`}> 
            <div className="bg-white fixed top-0 bottom-0 z-50 right-0 w-[450px] max-sm:w-[350px] px-6 pt-8">
                <button onClick={() => ToogleSidebarCarrito()}  className="py-3 px-4 absolute top-2 left-2 text-white !bg-[#FFC448] hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-md  ">X</button>
                <h2 className="font-semibold pb-8 pt-10 text-[30px] ">Carrito de <span className="font-bold text-[#FFC448]">Compras</span></h2>

                <ItemsSidebar></ItemsSidebar>
                <ItemsSidebar></ItemsSidebar>

                <Detalle></Detalle>
            <button onClick={()=>redirectCarrito()} className="w-[100%] bg-blue-300 rounded-xl p-2 mt-3 hover:bg-blue-500 font-semibold transition-all text-white">Ir a carrito</button>

            </div>

        </div>
    );
}

export default SidebarCarrito;