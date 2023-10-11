import { useContext, useState } from 'react'
import './styles.css'
import * as authService from '../../../services/auth-service'
import { useNavigate } from 'react-router-dom'
import { ContextToken } from '../../../utils/context-token'
import FormImput from '../../../components/FormInput'

const Login = () => {

  const [formData, setFormData] = useState<any>({
    username: {
    value: "",
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Email",
    validation: function (value: string) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
    },
    message: "Favor informar um email válido",
    },
    password: {
    value: "",
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Senha",
    }
    })
    const navigate = useNavigate()
    const {setContextTokenPayload} = useContext(ContextToken)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        authService.loginRequest({username: formData.username.value, password: formData.password.value}).then(response => {
            authService.saveAccesToken(response.data.access_token)
            setContextTokenPayload(authService.getAccessTokenPaylod())
            navigate("/")
        })
    }
    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData({...formData, [name]: {...formData[name], value: value}})
      }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form">
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormImput {...formData.username } className="dsc-form-control" onChange={ handleInputChange}></FormImput>
                <div className="dsc-form-error">Campo obrigatório</div>
              </div>
              <div>
                <FormImput {...formData.password} onChange={handleInputChange} className="dsc-form-control" />
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