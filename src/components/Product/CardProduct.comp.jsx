import { Navigate } from "react-router-dom";
import { UseColors } from "../../hooks/Colors";

const ProductComp = ({ el,toggleModalProd }) => {
        const {iconEye}= UseColors()
    return (
        <article href={el.link} className=" shadow-md rounded-[20px] p-4">
            <a onClick={()=>{location.href="#/product/13213213"}} className="w-[100%] cursor-pointer relative" >
                
                <div className="grid place-items-center w-[100%] opacity-0 hover:opacity-100 bg-[rgb(85,85,85,50%)] h-[100%] absolute">
                    <p className="text-white hover:scale-150 transition-all" onClick={(e)=>{e.stopPropagation();toggleModalProd()}}><img width="30px" src={iconEye} alt="" /></p>
                </div>
                 <img src={el.img} className="rounded-xl object-cover w-[500px] max-sm:h-[110px] sm:h-[200px] " alt="" /> 
            </a>
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
    );
}

export default ProductComp;