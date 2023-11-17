import { useState } from "react";

export const UseToogleModal = () => {

  const [StateModal, setStateModal] = useState(false);
 
    const toggleModalProd=()=>{
        if (StateModal) return setStateModal(false)
        if (!StateModal) return setStateModal(true)    }
  return {
    toggleModalProd,
    StateModal
  };
}
