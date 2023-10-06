import { useState } from 'react'
import './styles.css'
import { CredentialsDTO } from '../../../models/auth'
import * as authService from '../../../services/auth-service'

const Login = () => {

    const [formData, setFormData] = useState<CredentialsDTO>({username: "", password: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        authService.loginRequest(formData).then(response => {
            console.log(response.data)
            authService.saveAccesToken(response.data.access_token)
        })
    }
    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData({...formData, [name]: value})
    }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form">
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input onChange={handleInputChange} name='username' value={formData.username} className="dsc-form-control dsc-input-error" type="text" placeholder="Email" />
                <div className="dsc-form-error">Campo obrigatório</div>
              </div>
              <div>
                <input onChange={handleInputChange} name='password' value={formData.password} className="dsc-form-control" type="password" placeholder="Senha" />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button onClick={handleSubmit} type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login