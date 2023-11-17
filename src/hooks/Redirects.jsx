import { useState } from "react";

export const UseRedirect = () => {
    const redirectCarrito = () => location.href = "#/carrito"
    const redirectHome = () => location.href = "#/carrito"
    return {
        redirectCarrito,
        redirectHome
    };
}
