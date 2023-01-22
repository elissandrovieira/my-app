import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomerCard from '../../components/CustomerCard'

const List = () => {

  const [customers, setCustomers] = useState([])
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [ ])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(() => {
      const newCustomersState = customers.filter( e => e.id !== id)
      
      setCustomers(newCustomersState)
    })
  }

  const navigate = useNavigate()
  const handleEditCustomer = (id) => {
    navigate(`/customers/edit/${id}`)
  }

  

  return (
    <Grid container alignItens="flex-start" spacing={2} rowSpacing={2}>
      {
        customers.map(e => (
          <Grid item xs={12} md={6} lg={3} >
            <CustomerCard
              id={e.id}
              name={e.first_name}
              lastname={e.last_name}
              email={e.email}
              avatar={e.avatar}
              onRemoveCustomer={handleRemoveCustomer}
              onEditCustomer={handleEditCustomer}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default List