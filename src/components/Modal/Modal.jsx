import ProductOne from "../Product/ProdOne";

const ModalProd = ({toggleModalProd}) => {
    return (
        <div className="bg-[rgb(85,85,85,50%)] grid place-content-center p-5 fixed z-50 bottom-0 top-0 ">
            <div className="relative py-20 px-5 bg-white w-[70%] max-lg:w-[90%] m-auto rounded-xl">
                <button onClick={() => toggleModalProd()} className="py-3 px-4 absolute top-2 right-2 text-white !bg-[#FFC448] hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-md  ">X</button>
                <ProductOne></ProductOne>

            </div>

        </div>
    );
}

export default ModalProd;