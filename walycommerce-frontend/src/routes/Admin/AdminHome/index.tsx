import { useEffect, useState } from 'react'
import './styles.css'
import { UserDTO } from '../../../models/user'
import * as userService from '../../../services/user-service'

const AdminHome = () => {

    const [user, setUser] = useState<UserDTO>()

    useEffect(() => {
        userService.findMe()
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {
            console.log("error" + error)
        })
    }, [])

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Bem-vindo à àrea administrativa {user?.name}</h2>
      </section>
    </main>
  )
}

export default AdminHome