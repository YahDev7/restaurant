import { UseColors } from "../../hooks/colors";
import Loader from "./Loader";


const Header = () => {
    const { primaryColor, iconMenu, secondColor,widthIcons,iconuser,iconBuy,iconPhone } = UseColors()
    const navi = [
        "Productos",
        "contacto"

    ]
    return (
        <>
            <header  className="fixed z-30 w-[100%]">
                <div className="h-[89px] max-w-[1500px] !w-[88%] m-auto">
                    <div className="!h-[100%] grid grid-cols-3 place-content-center ">
                        <div className=" grid grid-cols-5 place-items-center">
                            <span className="border-[1px] rounded-full pt-3 pb-3 p-2 border-gray-800">
                                <img src={iconMenu} width={widthIcons} alt="" />
                            </span>
                           {/*  {
                                navi.map((el, index) => <span className=" font-semibold" key={index}>{el}</span>)
                            } */}
                        </div>
                        <div className="  grid lg:grid-cols-3 place-items-center justify-items-start">
                            <button className=" max-lg:w-[50px] max-lg:hidden  place-self-center  mr-2  block mb-3  text-white !bg-[#7AB5FB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm px-3 py-4 text-center ">Especial de la casa</button>
                            <div className="flex">
                                <span><img width={widthIcons} className="max-md:w-[15px]" src={iconPhone} alt="" /></span>
                                <p className="font-semibold max-md:text-[12px]">+51 989 780 989</p>
                            </div>
                        </div>

                        <div className="grid max-lg:grid-cols-3 grid-cols-8 max-lg:place-content-center justify-items-end place-items-center">
                            <span className="col-start-6  max-lg:col-start-2 border-[1px] rounded-full p-2 border-gray-800" ><img width={widthIcons} src={iconuser} alt="" /></span>
                            <span className="!border-[1px] rounded-full p-2 border-gray-800"><img width={widthIcons} src={iconBuy} alt="" /></span>
                        </div>
                           

                    </div>
                </div>

                {/*   <div className="contentcarrito" onClick={(e) => { statesetSidebarCarr(false) }}>
                        <div onClick={(e) => e.stopPropagation()} className="offcanvas offcanvas-end" style={{ right: "400px", visibility: "visible", opacity: "1" }} data-bs-scroll="true" id="" aria-labelledby="">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title !text-3xl text-[#03449d] font-semibold" id="offcanvasWithBothOptionsLabel" >Carrito</h5>
                                <button type="button" className=" !text-3xl btn-close  !text-black" onClick={() => statesetSidebarCarr(false)} data-bs-dismiss="offcanvas" aria-label="Close">x</button>
                            </div>
                            <div className="offcanvas-body">

                                <div className="sidebarCarr">
                                    
                                </div>

                                <div className="sidebarTpagar text-center" style={{ background: "#f5f5f5 padding: 10px" }}>

                                </div>

                                <div className="text-center pt-2">
                                    <a href="#/carrito" type="button" className="text-white bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Ver detalle de mi carrito
                                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

            </header>

        </>
    );
}

export default Header;