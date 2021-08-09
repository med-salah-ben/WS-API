import React from 'react'
import { Spinner,Card,ListGroup } from 'react-bootstrap'

const OneUser = ({user,loadUser}) => {
    return (
        <div>
        {
            loadUser? (
                <Spinner animation="border" />
            ):(
                <Card style={{ width: '18rem',marginLeft:'40%' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzDXs0BP1vLA4RJfIw5a4nCu9Ni-5OsBNqw&usqp=CAU" />
  <Card.Body>
    <Card.Title>name: {user.name}</Card.Title>
    <Card.Text>email:
      {user.email}
    </Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>phone: {user.phone}</ListGroup.Item>
    <ListGroup.Item>website: {user.website} </ListGroup.Item>
  </ListGroup>
  </Card.Body>
</Card>
            )
        }
            
        </div>
    )
}

export default OneUser
