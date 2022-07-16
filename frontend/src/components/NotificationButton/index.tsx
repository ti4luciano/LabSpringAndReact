import icon from '../../assets/img/notification-icon.svg'
import { sendNotification } from '../../services/saleService';

import './styles.css'

type Props ={
  saleId: number;
}

function NotificationButton({saleId}:Props) {
    return (
      <div className="red-btn" onClick={()=>_sendNotification(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    )
}

export default NotificationButton

function _sendNotification(id: number): void {
  sendNotification(id).then(
    r=>{
      console.log('Sucesso ', r);
    }
  )
}
