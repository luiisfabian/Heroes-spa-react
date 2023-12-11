import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/*',{
      replace: true
    })
    console.log('login')
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
