import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/login/login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const mockUser = {
    username: 'miflix@email.com',
    password: '123'
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (username === mockUser.username && password === mockUser.password) {
      navigate('/home')
    } else {
      alert('Credenciais inválidas!')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
