import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext';

export const LoginPage = () => {


  const navigate = useNavigate();
  const { login } = useContext(authContext)



  const onLogin = () => {

    const lastPash = localStorage.getItem('lastPath') || '/'
    login('Fabian Muñoz');

    navigate(lastPash, {
      replace: true
    })
  }

  return (
    <>

      <div className="container mt-5">
        <h1>LoginPage</h1>
        <hr />
        <button className='btn btn-primary' type="button" onClick={onLogin}>Ingresar</button>
      </div>
    </>
  )
}
