import React from 'react'
import '../../styles/login/login.css'
import logotipo from '../../image/logotipo.png'

function Login() {
  return (
    <div className="login-container">
      <div className="logotipo">
        <img src={logotipo} alt="Logotipo da Empresa" />
      </div>
      <form className="login-form">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
