import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';

import CustomerCard from '../components/CustomerCard'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  console.log(customers)

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [ ])

  return (
    <Grid container alignItens="flex-start" spacing={2} rowSpacing={2}>
      {
        customers.map(e => (
          <Grid item xs={12} md={6} lg={3} >
            <CustomerCard
              name={e.first_name}
              lastname={e.last_name}
              email={e.email}
              avatar={e.avatar}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Customers