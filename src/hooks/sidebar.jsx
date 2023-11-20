import { useState } from "react";

export const UseSidebar = () => {
    const [open, setOpen] = useState(false);

    const ToogleSidebar = () =>{
        if (open) return setOpen(false)
        if (!open) return setOpen(true)  
    }
    return {
        open,
        ToogleSidebar
    };
}
