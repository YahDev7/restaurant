import ProductOne from "../../components/Product/ProdOne";
import { UseColors } from "../../hooks/Colors";

const Categoria = () => {
    let metodosPago = [
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/plin-logo-967A4AF583-seeklogo.com_gb3evx.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/yape-logo-3E473EE7E5-seeklogo.com_ypnk28.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/interbank_uqsza8.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/unnamed_mkb6bd.png",
    ]


    return (
        <section className=" w-[100%] pt-[150px]">
            <div className=" w-[88%] m-auto max-w-[1500px]">
                <div className="flex  space-x-4 pb-16">
                    <p className="font-semibold"> <a href="">Home /</a> </p>
                    <p className="font-semibold"> <a href="">Productos /</a> </p>
                    <p className=" text-gray-400">product</p>
                </div>
                <ProductOne></ProductOne>
            </div>

        </section>
    );
}

export default Categoria;