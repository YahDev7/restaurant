import ProductComp from "../../components/Product/CardProduct.comp";

const ProductList = ({toggleModalProd,productos}) => {
  return (

        <section className="grid  lg:grid-cols-5 gap-9 pt-7 max-lg:grid-cols-3  max-md:grid-cols-2 ">
          {
            productos.map((el) =>
              <ProductComp toggleModalProd={toggleModalProd} el={el} />
            )
          }
        </section>
  );
}

export default ProductList;