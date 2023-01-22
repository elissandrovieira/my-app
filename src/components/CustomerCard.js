import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton
} from '@mui/material'
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material'

import ModalConfirm from './ModalConfirm'


const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer,
    onEditCustomer
}) => {

  const [modalButton, setModalButton] = useState(false)
  const handleClickOpen = () => {
    setModalButton(true)
  }
  const handleClose = () => {
    setModalButton(false)
  }

  const haldleOnRemoveCustomers = id => {
    onRemoveCustomer(id)
    handleClose()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }

  return (
    <>
      <Card sx={{ maxWidth: 345,
      margin: '0 auto' }}>
        <CardHeader
          avatar={
            <Avatar src={avatar} />
          }
          
          title={`${name} ${lastname}`}
          subheader={email}
        />
        
        <CardActions disableSpacing>
          <IconButton aria-label="edit customer" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete customer" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={modalButton}
        onClose={handleClose}
        onConfirm={() => haldleOnRemoveCustomers(id)}
        title={`Do you want remove ${name} ${lastname} of Customers?`}
        message="You cannot reverse this action. "
      />
    </>
  )
}

export default CustomerCard