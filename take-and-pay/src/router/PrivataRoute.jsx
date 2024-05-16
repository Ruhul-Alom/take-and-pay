import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

function PrivataRoute({children}) {
    const {user}=useSelector(state=>state.auth)
    const location = useLocation();
    console.log(user);
    if (user) {
      return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivataRoute