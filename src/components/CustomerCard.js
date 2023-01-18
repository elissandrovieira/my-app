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

const CustomerCard = ({
    name,
    lastname,
    email,
    avatar
}) => {

  return (
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
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CustomerCard