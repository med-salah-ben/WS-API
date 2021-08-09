import React from 'react'
import { Spinner } from 'react-bootstrap'
import Post from "./Post"

const PostList = ({posts , loadPosts}) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap"}} >
            {
                loadPosts ? (
                    <Spinner />
                ):(
                    posts.map((el)=> <Post post={el} key={el.id} /> )
                )
            }
        </div>
    )
}

export default PostList
