import { createContext, useEffect, useState } from "react";

const SidebarContext = createContext()
//let carrinital=JSON.parse(localStorage.getItem("carrito"));
const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const ToogleSidebar = () => {
        if (open) return setOpen(false)
        if (!open) return setOpen(true)
    }

    const data = {
        open,
        ToogleSidebar
    }

    return (
        <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
    )
}


export { SidebarProvider };
export default SidebarContext;