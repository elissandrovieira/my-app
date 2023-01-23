import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useAuth from '../state/auth'

const Login = () => {

  const [form, setform] = useState({
    email: '',
    password:'',
  })

  const [isLoading, setIsLoading] = useState(false)

  const { setUser } = useAuth()

  const navigate = useNavigate()

  const handleInputChange = e => {
    const {id, value} = e.target

    setform({
      ...form,
      [id]: value,
    })
  }

  const handleFormSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {

      setUser({
        logged: true,
        email: form.email,
        
      })

      navigate('/home')

    }, 4000)
  }

  return(
      <Box component="form" sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TextField
            id="email"
            label="Email"
            sx={{marginBottom: 2}}
            onChange={handleInputChange}
            
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            sx={{marginBottom: 2}}
            onChange={handleInputChange}
          />
          <Button variant="contained" color='secondary' onClick={handleFormSubmit}>{
            isLoading ? 'Loading...'
            : 'Login'
          }</Button >
        </Box>
  )
}

export default Login