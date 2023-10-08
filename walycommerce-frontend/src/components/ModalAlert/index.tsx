import ButtonPrimary from '../ButtonPrimary';
import './styles.css'

type props = {
    message: string;
    onDialogClose: () => void;
}

const ModalAlert = ({message, onDialogClose}: props) => {
  

    return (
    <div className="dsc-dialog-backgroud">
        <div className='dsc-dialog-box'>
            <h2>{message}</h2>
           <div onClick={() => onDialogClose()}> <ButtonPrimary text='Ok'></ButtonPrimary></div>
        </div>
    </div>
  )
}

export default ModalAlert