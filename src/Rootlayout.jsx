import React from 'react'
import { Outlet } from "react-router";
import Navber from './Componets/Navber';
import Footer from './Componets/Footer';

const Rootlayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootlayout
