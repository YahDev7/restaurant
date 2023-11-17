

const Categorias = () => {
    let categoriasList = [
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-isabella-mendes-338713_jn3dtg.jpg", title: "Bebidas", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981493/Restaurant/categorias/pexels-navada-ra-1703272_e7dqrj.jpg", title: "Sopas", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-mali-maeder-233305_boickh.jpg", title: "Bistecs", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-keegan-evans-105588_dc7rws.jpg", title: "Pollo", link: "#/categoria/2312312" }
    ]
    return (
        <section className="w-[100%] pb-20">
            <div className=" max-w-[1500px] !w-[88%] m-auto">
                <h2 className="font-semibold text-[30px] ">Seleccion de <span className="font-bold text-[#FFC448]">Catalagos</span></h2>

                <section className="grid grid-cols-5 gap-9 pt-7 max-lg:grid-cols-4 max-md:grid-cols-2 ">
                    {categoriasList.map((el) =>
                        <a href={el.link} className=" shadow-md rounded-[20px] p-4 grid grid-cols-2 transition  hover:bg-[#ADD3FF] ">
                            <div className="w-[50px] rounded-full ">
                                <img className="h-12 !w-[100px] rounded-[20px] object-cover"  src={el.img} alt="" />

                            </div>
                            <p className="leading-[40px] text-[17px] max-md:text-[15px] font-semibold">{el.title}</p>
                        </a>
                    )}

                </section>
            </div>
        </section>

    );
}

export default Categorias;

