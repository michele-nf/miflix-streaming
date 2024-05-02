import React from 'react'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
