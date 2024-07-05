import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from './RoutConstant';


function PrivateRouts() {
  // const token = localStorage.getItem("token");
  const token = localStorage.getItem("token");


  return token ? <Outlet /> : <Navigate to={AppRoutes.Dashboard} />;
  // return token ? <Navigate to={AppRoutes.Sign_in} /> : <Outlet />;
}

export default PrivateRouts
