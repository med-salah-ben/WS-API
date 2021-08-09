import React from 'react'

const Comment = ({el}) => {
    return (
        <div>
             <h2>name:</h2>
             <h4> {el.name} </h4>
            <h2>Comment:</h2>
            <h4> {el.body } </h4>
        </div>
    )
}

export default Comment
