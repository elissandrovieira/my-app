import { useState } from 'react'
import {
  TextField,
  Box,
  Button,
  Snackbar,
  Alert
} from '@mui/material'
import axios from 'axios'

const Register = () => {
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    job: {
      value: '',
      error: false
    }
  })

  const handleInputChange = (e) => {
    const {id, value} = e.target

    setForm({
      ...form,
      [id]: { value }
    })
  }

  const [toastyMessage, setToastyMessage] = useState(false)

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

    if(!form.job.value) {
      hasError = true
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText:'Fill job field correctly!'
      }
    }

    if(hasError === true) {
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value
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
          label="Type yor name"
          sx={{marginBottom: 2}}
          onChange={handleInputChange}
          value={form.name.value}
          error={form.name.error}
          helperText={form.name.helperText}
        />
        <TextField
          id="job"
          label="Type yor job"
          sx={{marginBottom: 2}}
          onChange={handleInputChange}
          value={form.job.value}
          error={form.job.error}
          helperText={form.job.helperText}
        />
        <Button variant="contained" color='secondary' onClick={handleRegisterButton}>Register</Button >
      </Box>
      
      <Snackbar open={toastyMessage} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Register