import { createContext, useEffect, useState } from "react";

const SidebarCarritoContext = createContext()
//let carrinital=JSON.parse(localStorage.getItem("carrito"));
const SidebarCarritoProvider = ({ children }) => {
    const [openCarrito, setopenCarrito] = useState(false);

    const ToogleSidebarCarrito = () => {
        if (openCarrito) return setopenCarrito(false)
        if (!openCarrito) return setopenCarrito(true)
    }

    const data = {
        openCarrito,
        ToogleSidebarCarrito
    }

    return (
        <SidebarCarritoContext.Provider value={data}>{children}</SidebarCarritoContext.Provider>
    )
}


export { SidebarCarritoProvider };
export default SidebarCarritoContext;