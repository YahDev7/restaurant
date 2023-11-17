import { UseColors } from "../../hooks/Colors";

const ProductOne = () => {
    const { iconCarr } = UseColors()

    return (
        <div className="max-lg:grid-cols-1 gap-7 grid grid-cols-2">

            <article className="w-[100%] max-w-[500px]  max-sm:w-[200px] m-auto">
                <img className=" max-w-[100%] h-[100%] rounded-xl object-cover" src="https://res.cloudinary.com/dths6glis/image/upload/v1699909537/Restaurant/Public_icons/pexels-spencer-davis-4393021_svwtty.jpg" alt="" />
            </article>
            <article>
                <strong> Carnes</strong>
                <h2 className="text-[50px] font-bold max-md:text-[35px]"> Huevo con Papas fritas</h2>
                <p className="max-md:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero sint distinctio asperiores corrupti ad, architecto mollitia commodi placeat optio repellendus! Vel vero, ducimus doloribus harum quos odit nihil temporibus.</p>
                <div className="pt-4 flex space-x-4 items-start mb-4">
                    <div className="flex flex-col">
                        <p className="text-[30px] font-bold max-md:text-[25px]">S/500.00</p>
                        <p className="line-through font-semibold text-gray-300">S/400.00</p>
                    </div>
                    <p className="py-2 bg-blue-200  px-2 rounded-xl text-blue-600 font-semibold"> 50%</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-3 md:col-span-1  flex items-baseline justify-between rounded-md bg-gray-200 p-1">

                        <button className="p-3 max-md:p-1 text-[#FFC448] text-3xl">+</button>
                        <span className="text-xl">0</span>
                        <button className="p-3 max-md:p-1 text-[#FFC448] text-3xl">-</button>
                        {/* <button className=" text-[18px] text-white !bg-blue-400 rounded-[20px] px-4 py-2">+</button>
                    <input className=" rounded-xl  border-[1px] px-4 py-2  outline-none " value={1} type="text" />
                    <button className=" text-[18px] text-white !bg-blue-400 rounded-[20px] px-4 py-2">-</button> */}

                    </div>
                    <button className=" col-span-3 md:col-span-1 text-[16px] flex items-center space-x-3 justify-center  text-white !bg-[#FFC448] hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-md py-2 "><img width={`30px`} src={iconCarr} alt="" /><div>Agregar</div></button>
                </div>
            </article>
        </div>
    );
}

export default ProductOne;