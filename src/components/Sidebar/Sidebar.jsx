import { useContext, useEffect, useState } from "react";
import SidebarContext from "../../context/sidebar.context";

const Sidebar = () => {
    const {  open, ToogleSidebar} = useContext(SidebarContext)

    let categoriasList = [
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-isabella-mendes-338713_jn3dtg.jpg", title: "Bebidas", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981493/Restaurant/categorias/pexels-navada-ra-1703272_e7dqrj.jpg", title: "Sopas", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-mali-maeder-233305_boickh.jpg", title: "Bistecs", link: "#/categoria/2312312" },
        { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-keegan-evans-105588_dc7rws.jpg", title: "Pollo", link: "#/categoria/2312312" }
    ]

    return (
        <div onClick={(e) => { ToogleSidebar() }} className={`bg-[rgb(85,85,85,50%)] top-0 z-50 w-[100%] ${open ? "block transition-all" : "hidden"}  fixed bottom-0`}>
            <div onClick={(e) => e.stopPropagation()} className="bg-white  max-sm:w-[60%] max-md:w-[50%] md:w-[30%] h-[100%] relative px-6 pt-8">
                <button onClick={() => ToogleSidebar()} className="py-3 px-4 absolute top-2 right-2 text-white !bg-[#FFC448] hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-md  ">X</button>

                <div className="px-6 py-4 text-slate-700 pt-10">
                    <ul>
                        {categoriasList.map((el) =>
                            <li><a href="" className=" text-center inline-block hover:bg-blue-400 hover:text-white w-full rounded px-6 py-4">{el.title}</a></li>

                        )}

                        {/*  <li>
                                <div className="relative">
                                    <a href="" className=" inline-block hover:bg-blue-400 hover:text-white w-full rounded px-6 py-4">Sopas</a>
                                    <div className="absolute top-3 right-8">
                                    <button>b</button>

                                    </div>

                                </div>
                               
                            <div>
                                <ul className="flex flex-col pl-4 border-l-2 border-blue-100">
                                    <li><a className="inline-block w-full px-4 py-2 text-sm rounded hover:bg-blue-300" href="">Sopa de gallina</a></li>
                                </ul>
                            </div>
                        </li> */}


                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;