import Items from "../../components/Carrito/Items";


const Carrito = () => {
    return (
        <section className=" w-[100%] pt-[150px]">
            {/* {StateModal &&
              <ModalProd toggleModalProd={toggleModalProd}/>
            } */}
            <div className=" w-[88%] m-auto max-w-[1500px]">
                <h2 className="font-semibold text-[30px] ">Carrito de <span className="font-bold text-[#FFC448]">Compras</span></h2>
                <div className="grid gap-4 max-md:grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-4 pt-10 grid gap-4" >
                        <Items></Items>
                        <Items></Items>
                    </div>
                    <div className="font-semibold grid gap-1 ">
                        {/*                         <h2 > <span className="text-[#FFC448]">Hay</span>  <span className="text-blue-400"> <strong>1</strong>  Articulo</span></h2>
 */}            
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

                        <button className="bg-blue-400 rounded-xl p-2 mt-3 text-white">Comprar</button>



                    </div>
                </div>

            </div>
        </section>

    );
}

export default Carrito;