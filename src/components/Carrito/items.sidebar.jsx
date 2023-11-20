
const ItemsSidebar = () => {
    return (
        <div className="w-[95%] m-auto font-semibold max-sm:text-[13px]">
        <article className="grid grid-cols-1 relative place-items-center ">
            <div className="w-[100%] flex justify-between items-center max-md:space-x-3">
                <div className="w-[100px] min-w-[100px]">
                    <img src="https://res.cloudinary.com/dths6glis/image/upload/v1699909537/Restaurant/Public_icons/pexels-spencer-davis-4393021_svwtty.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                <p>Huevo con papas</p>
                <p  className="text-slate-600 font-medium text-[15px] max-sm:text-[12px]">S/200</p>

                </div>
                <p className="text-[20px] max-sm:text-[15px]">S/400</p>
               
            </div>
            <div className="col-span-3 md:col-span-1 flex items-baseline justify-between rounded-md bg-gray-200 ">
                    <button className="p-2 max-md:p-1 text-[#FFC448] max-sm:text-2xl text-3xl">+</button>
                    <span className="text-xl max-sm:text-[16px]">0</span>
                    <button className="p-2 max-md:p-1 text-[#FFC448] max-sm:text-2xl text-3xl">-</button>
                </div>
                <button className="absolute top-[-20px] right-0   text-[20px] transition-all text-slate-500"> x</button>
        </article>
        
        
    </div> 

    );
}

export default ItemsSidebar;