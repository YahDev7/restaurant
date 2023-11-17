import { UseColors } from "../../hooks/Colors";


const Banner = () => {
    const { primaryColor, contentGlobal, secondColor } = UseColors()
    return (
        <section className={`relative ${primaryColor} !w-[100%] h-[100vh]`} >
            <div className="relative z-10 max-w-[1500px] m-auto !w-[88%] h-[100%] max-lg:grid-cols-1  place-items-center place-content-center grid grid-cols-2 ">
                <div className=" w-[100%] max-lg:h-[300px] lg:h-[500px]">
                 <div className="">
                        <h2 className="lg:text-[80px] max-lg:text-[50px]  max-sm:text-[45px] font-bold max-lg:text-center" >Lo más delicioso</h2>
                        <h2 className="max-lg:text-center"> <strong className={`text-[75px] max-sm:text-[40px] !text-[#7AB5FB]  `}>JAÉN</strong></h2>
                        <p className="pl-2 max-lg:text-center text-[20px] font-semibold pb-4" >sopa, cuy, chicharron</p>
                        <div className="max-lg:text-center max-lg:grid max-lg:place-content-center">
                            <button className=" max-sm:!bg-white  max-sm:!text-[#FFC448] text-[18px] col-start-2 mr-2 w-[250px] block mb-3 text-white !bg-[#FFC448] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[20px] text-sm px-3 py-4 text-center ">Obten tu pedido</button>
                        </div>
                    </div> 
                </div>

                <div className="max-md:w-[300px] w-[500px] h-[300px] lg:h-[500px]">
                     <img className=" max-w-[100%] h-[100%] rounded-xl object-cover" src="https://res.cloudinary.com/dths6glis/image/upload/v1699909537/Restaurant/Public_icons/pexels-spencer-davis-4393021_svwtty.jpg" alt="" />
 
                </div>

            </div>
            <img className="top-[-50%] left-[-20%] max-md:top-[-30%] max-md:!max-w-[700px] max-sm:!max-w-[450px] absolute " src="https://res.cloudinary.com/dths6glis/image/upload/v1699908731/Restaurant/Public_icons/Vector_2_xxtyal.svg" alt="" />
 
        </section>

        /*     <section className={`${primaryColor} !w-[100%] h-[100vh] pb-10 `} >
                <div className={`!w-[88%] max-lg:!w-[100%] max-lg:grid-cols-1 max-lg:pt-[100px]  lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] grid grid-cols-2 absolute z-10`}>
                    <div className="ps-[50px] grid place-items-center">
                        
                    </div>
                </div>
    
                 <img className="max-w-none z-[1] absolute max-lg:top-[-150px] max-lg:left-[-300px] max-lg:!w-[800px] max-lg:!h-[800px]  lg:left-[-1000px] lg:top-[-1000px]" src="https://res.cloudinary.com/dths6glis/image/upload/v1699892966/Restaurant/Public_icons/Vector_1_ooxlqr.svg" alt="" />
            </section> */

    );
}

export default Banner;