
const Detalle = () => {
    return (

        <div className="font-semibold grid gap-1 ">

            <h2>Hay 1 Articulo</h2>

            <section className="grid grid-cols-2">
                <p>Sub Total</p>
                <p className="text-end"> S/2400</p>
            </section>


            <section className="grid grid-cols-2">
                <p>Descuento</p>
                <p className="text-end"> S/0</p>
            </section>


            <section className="grid grid-cols-2">
                <p>Envio</p>
                <p className="text-end"> S/10</p>
            </section>
            <section className="grid grid-cols-2">
                <p>Total</p>
                <p className="text-end"> S/2410</p>
            </section>

            <button className="bg-blue-400 rounded-xl p-2 mt-3 hover:bg-blue-500 transition-all text-white">Comprar</button>



        </div>

    );
}

export default Detalle;

