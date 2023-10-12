import { useNavigate, useParams } from 'react-router-dom'
import './styles.css'
import ButtonInverse from '../../../components/ButtonInverse'
import FormImput from '../../../components/FormInput'
import { update, updateAll, validate } from '../../../utils/forms'
import { useState, useEffect } from 'react'
import { findById } from '../../../services/productService'

const ProductsForm = () => {

  const navigate = useNavigate()
  const params = useParams()

  const isEditing = params.productId !== 'create';

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
      validation: function(value: number){
        return value > 0;
      },
      message: "Favor informar um valor positivo",
      invalid: ""
    },
    imgUrl: {
      value: "",
      id: "image",
      name: "image",
      type: "text",
      placeholder: "imagem",
    },
  })

  const hanldeCancelCreateClick = () => {
    navigate('/admin/products')

  }

  const handleInputChange = (e) => {
    const dataUpdate = update(formData, e.target.name, e.target.value)
    const datavalidated = validate(dataUpdate, e.target.name)
    setFormData(datavalidated)
  }

  useEffect(() => {
    if(isEditing){
      findById(Number(params.productId))
      .then(response => {
        setFormData(updateAll(formData, response.data))
      })
    }
  }, [])
  

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormImput onChange={handleInputChange} {...formData.name} className="dsc-form-control" />
                <div className='dsc-form-error'>{formData.name.message}</div>
              </div>
              <div>
                <FormImput onChange={handleInputChange} {...formData.price} className="dsc-form-control" />
                <div className='dsc-form-error'>{formData.price.message}</div>
              </div>
              <div>
                <FormImput onChange={handleInputChange} {...formData.imgUrl} className="dsc-form-control" />
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