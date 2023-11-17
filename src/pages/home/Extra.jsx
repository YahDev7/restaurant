import { UseColors } from "../../hooks/Colors";


const Extra = () => {
    let extra = [
        { icon: "https://res.cloudinary.com/dths6glis/image/upload/v1699974427/Restaurant/Public_icons/Extra/Vector_oqoaof.svg", title: "Delivery a domicilio", content: "Hasta la puerta de tu casa" },
        { icon: "https://res.cloudinary.com/dths6glis/image/upload/v1699974427/Restaurant/Public_icons/Extra/Vector-1_egkwd2.svg", title: "Servicio 24/7", content: "Llamenos al 982 767 823" },
        { icon: "https://res.cloudinary.com/dths6glis/image/upload/v1699974427/Restaurant/Public_icons/Extra/Vector-2_vex9sa.svg", title: "Garantia", content: "Alimento" }
    ]

    return (
        <section className="relative w-[100%] pb-24 z-50">
            <div className="grid grid-cols-3  max-md:grid-cols-1 max-lg:grid-cols-2 gap-20 pt-14  max-w-[1500px] !w-[88%] m-auto">
                {
                    extra.map((el) =>
                        <article className=" flex p-4 border-gray-200  shadow-md rounded-xl">
                            <div className="mr-5">
                                <img src={el.icon} alt="" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[20px]">{el.title}</h3>
                                <p>{el.content}</p>
                            </div>
                        </article>
                    )
                }


            </div>
        </section>

    );
}

export default Extra;