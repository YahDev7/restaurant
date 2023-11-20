import ModalProd from "../../components/Modal/modal";
import ProductComp from "../../components/Product/CardProduct.comp";
import ProductList from "../../components/Product/ProdList";
import { UseToogleModal } from "../../hooks/ToogleModal";

const Categoria = () => {
  const { toggleModalProd, StateModal } = UseToogleModal()

  let productosByCat = [
    { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-isabella-mendes-338713_jn3dtg.jpg", title: "Bebidas", link: "", precio: 24 },
    { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981493/Restaurant/categorias/pexels-navada-ra-1703272_e7dqrj.jpg", title: "Sopas", link: "", precio: 24 },
    { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-mali-maeder-233305_boickh.jpg", title: "Bistecs", link: "", precio: 24 },
    { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-keegan-evans-105588_dc7rws.jpg", title: "Pollo", link: "", precio: 24 },
    { img: "https://res.cloudinary.com/dths6glis/image/upload/v1699981492/Restaurant/categorias/pexels-keegan-evans-105588_dc7rws.jpg", title: "Pollo", link: "", precio: 24 }
  ]
  return (

    <section className=" w-[100%] pt-[150px]">
      {StateModal &&
        <ModalProd toggleModalProd={toggleModalProd} />


      }
      <div className=" w-[88%] m-auto max-w-[1500px]">
        <h2 className=" ps-3 text-[30px] font-bold text-blue-400">Categorias</h2>

        <ProductList toggleModalProd={toggleModalProd} productos={productosByCat}></ProductList>

      </div>
    </section>


  );
}

export default Categoria;