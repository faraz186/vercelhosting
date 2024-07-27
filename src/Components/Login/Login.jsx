import React from 'react'

const Login = ({click}) => {
  return (
    <div>
      <h1>Login Form</h1>
  <form>
        <label htmlFor="">Enter Email</label>
        <input type="email" name="name" placeholder="Enter Email" />

        <br />
        <br />

        <label htmlFor="">Enter password</label>
        <input type="password" name="name" placeholder="Enter password" />

        <br />
        <br />
        <a href="#" onClick={click}>Create new account!!</a>
        <br />
        <br />
        
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
