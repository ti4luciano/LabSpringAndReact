import NotificationButton from '../NotificationButton'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get(BASE_URL + "/sales").then(
      response => {
        setSales(response.data.content)
      }
    ).catch(
      err => {
        console.error(err)
      }
    )
  }, []);

  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div>
        <div className="form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="sales-table">
          <thead>
            <tr>
              <th >ID</th>
              <th >Data</th>
              <th>Vendedor</th>
              <th >Visitas</th>
              <th >Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sallerName}</td>
                  <td>{sale.visited}</td>
                  <td>{sale.visited}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="red-btn-container">
                      <NotificationButton />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard