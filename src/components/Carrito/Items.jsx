import { UseColors } from "../../hooks/Colors";


const Items = () => {
    const { iconDelete } = UseColors()
    return (
        <div className="w-[100%] font-semibold max-sm:text-[13px]">
            <article className="grid max-sm:grid-cols-1 md:grid-cols-3 max-md:grid-cols-3 sm:p-3 place-items-center ">
                <div className="w-[100%] sm:col-span-2 flex justify-between items-center space-x-4 lg:space-x-20">
                    <div className="w-[120px] min-w-[100px]">
                        <img src="https://res.cloudinary.com/dths6glis/image/upload/v1699909537/Restaurant/Public_icons/pexels-spencer-davis-4393021_svwtty.jpg" alt="" />
                    </div>
                    <p>Huevo con papas</p>
                    <div className="col-span-3 md:col-span-1 flex items-baseline justify-between rounded-md bg-gray-200 ">
                        <button className="p-3 max-md:p-1 text-[#FFC448] max-sm:text-2xl text-3xl">+</button>
                        <span className="text-xl max-sm:text-[16px]">0</span>
                        <button className="p-3 max-md:p-1 text-[#FFC448] max-sm:text-2xl text-3xl">-</button>
                    </div>
                    <p >S/ 200</p>
                </div>
                <div className="flex items-center space-x-3">

                    <p>2</p>
                    <p>S/400</p>
                    <button className="bg-blue-400 rounded-xl p-1.5 max-sm:p-1"> <img className="max-sm:w-[25px]" width={`30px`} src={iconDelete} alt="" /></button>
                </div>
            </article>
        </div>

    );
}

export default Items;