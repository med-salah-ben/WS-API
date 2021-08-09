import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from "react-router-dom"


const Post = ({post}) => {
    return (
        <div>
            <Card style={{ width: '18rem', minHeight:"300px" , margin:"6px" }}>

  <Card.Body>
    <Card.Title> {post.title} </Card.Title>
    <Card.Text>
      {post.body}
    </Card.Text>
    <Link to ={{pathname:`/posts/${post.id}`,state:{post:post} }} >Comments</Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Post
