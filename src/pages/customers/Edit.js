import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import {
  TextField,
  Box,
  Button,
  Snackbar,
  Alert
} from '@mui/material'

const Edit = () => {
  const { id } = useParams()

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    lastname: {
      value: '',
      error: false
    }
  })
  
  const [toastyMessage, setToastyMessage] = useState(false)

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
    .then(response => {
      setForm({
        name: {
          value: response.data.data.first_name,
          error: false
        },
        lastname: {
          value: response.data.data.last_name,
          error: false
        }
      })
    })
  }, [id])

  const handleInputChange = (e) => {
    const {id, value} = e.target
    console.log(value)
    setForm({
      ...form,
      [id]: { value }
    })
  }
  
  const handleRegisterButton = () => {
    let hasError = false
    let newFormState = {
      ...form
    }

    if(!form.name.value) {
      hasError = true
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText:'Fill name field correctly!'
      }
    }

    if(!form.lastname.value) {
      hasError = true
      newFormState.lastname = {
        value: form.lastname.value,
        error: true,
        helperText:'Fill lastname field correctly!'
      }
    }

    if(hasError === true) {
      return setForm(newFormState)
    }

    axios.put(`https://reqres.in/api/users/${id}`, {
      name: form.name.value,
      lastname: form.lastname.value
    })
    .then(setToastyMessage(true))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastyMessage(false);
  }
  

  return (
    <>
      <Box component="form" sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <TextField
          id="name"
          label="Type your name"
          sx={{marginBottom: 2}}
          onChange={handleInputChange}
          value={form.name.value}
          error={form.name.error}
          helperText={form.name.helperText}
        />
        <TextField
          id="lastname"
          label="Type your lastname"
          sx={{marginBottom: 2}}
          onChange={handleInputChange}
          value={form.lastname.value}
          error={form.lastname.error}
          helperText={form.lastname.helperText}
        />
        <Button variant="contained" color='secondary' onClick={handleRegisterButton}>Edit</Button >
      </Box>
      
      <Snackbar open={toastyMessage} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Edit