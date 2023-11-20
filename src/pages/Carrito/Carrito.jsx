import Detalle from "../../components/Carrito/Detalle";
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
                    <Detalle></Detalle>

                </div>

            </div>
        </section>

    );
}

export default Carrito;