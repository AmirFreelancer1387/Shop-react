import React, { useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';

const Wellcome = () => {

    useEffect(() => {
    toast.info('Wellcome to my Shop 👋' , {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  }, []);
  return (
    <>
     <ToastContainer />
    </>
  )
}

export default Wellcome