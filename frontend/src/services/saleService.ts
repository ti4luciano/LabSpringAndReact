import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../utils/request';

const getSales = (dmin: string, dmax: string):Promise<any> => {
    return axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).catch(
        fail =>{
            toast.warn('Falha ao obter a lista de vendas.');
            console.error('Error on getSales: ', fail);
        }
    );
}

const sendNotification =(id:number)=>{
    return axios.get(`${BASE_URL}/sales/${id}/notification`).catch(
        fail =>{
            toast.warn('Falha ao enviar o SMS.');
            console.error('Error on send notification: ', fail);
        });
}

export {getSales, sendNotification}