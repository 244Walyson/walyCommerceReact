import { useNavigate } from 'react-router-dom'
import './styles.css'
import ButtonInverse from '../../../components/ButtonInverse'
import FormImput from '../../../components/FormInput'
import { update } from '../../../utils/forms'
import { useState } from 'react'

const ProductsForm = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "nome do produto",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "preço",
    },
    image: {
      value: "",
      id: "image",
      name: "image",
      type: "text",
      placeholder: "imagem",
    }
  })

  const hanldeCancelCreateClick = () => {
    navigate('/admin/products')

  }

  const handleInputChange = (e) => {
    setFormData(update(formData, e.target.name, e.target.value ))
  }

  console.log(formData)
  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormImput onChange={handleInputChange} {...formData.name} className="dsc-form-control" />
              </div>
              <div>
                <FormImput onChange={handleInputChange} {...formData.price} className="dsc-form-control" />
              </div>
              <div>
                <FormImput onChange={handleInputChange} {...formData.image} className="dsc-form-control" />
              </div>
              <div>
                <select className="dsc-form-control dsc-select" required>
                  <option value="" disabled selected>Categorias</option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                </select>
              </div>
              <div>
                <textarea className="dsc-form-control dsc-textarea" placeholder="Descrição"></textarea>
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <div onClick={hanldeCancelCreateClick}><ButtonInverse text='Cancelar'></ButtonInverse></div>
              <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ProductsForm