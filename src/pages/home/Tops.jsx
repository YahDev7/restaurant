import { UseColors } from "../../hooks/colors";


const Tops = () => {
    let { iconBuy } = UseColors()
    let productosList = [
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-isabella-mendes-338713_jn3dtg.jpg", title: "Bebidas", link: "", precio: 24 },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981493/Restaurant/categorias/pexels-navada-ra-1703272_e7dqrj.jpg", title: "Sopas", link: "", precio: 24 },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-mali-maeder-233305_boickh.jpg", title: "Bistecs", link: "", precio: 24 },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-keegan-evans-105588_dc7rws.jpg", title: "Pollo", link: "", precio: 24 }
    ]
    return (
        <section className="w-[100%] ">
            <div className=" max-w-[1500px] !w-[88%] m-auto">
                <h2 className="font-semibold text-[30px] ">Más <span className="font-bold text-[#FFC448]">Vendidos</span></h2>
                <section className="grid max-sm:grid-cols-1 grid-cols-5 gap-9 pt-7 max-lg:grid-cols-4 max-md:grid-cols-2 ">
                    {
                        productosList.map((el) =>
                            <article href={el.link} className=" shadow-md rounded-[20px] p-4">
                                <div className="w-[100%] relative ">
                                    <div className="w-[100%] hidden hover:block bg-[rgb(85,85,85,50%)] h-[200px] absolute">
                                        <p className="absolute top-[50%] left-[45%]">ojo</p>
                                        
                                    </div>
                                    <img src={el.img} className=" object-cover w-[500px] h-[200px]" alt="" />
                                </div>
                                <p className="font-semibold text-[20px] pt-4">{el.title}</p>
                                <div className="grid grid-cols-2">
                                    <p className="font-semibold text-[16px]" >S/24</p>
                                    <button className=" max-lg:w-[50px]  place-self-center col-start-2 mr-2  block mb-3  text-white !bg-[#7AB5FB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm px-3 py-2 text-center "><img src="https://res.cloudinary.com/dths6glis/image/upload/v1699802127/Restaurant/Public_icons/MaterialSymbolsShoppingBagOutline_hplxfs.svg" className="w-[20px]" alt="" /></button>

                                </div>
                                {/* <div className="w-[50px] rounded-full ">
                                    <img className="h-12 !w-[100px] rounded-[20px] object-cover" src={el.img} alt="" />

                                </div>
                                <p className="leading-[40px] text-[17px] max-md:text-[15px] font-semibold">{el.title}</p> */}
                            </article>
                        )
                    }
                </section>
            </div>
        </section>

    );
}

export default Tops;

