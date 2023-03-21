import React from 'react'
import { Avatar } from '@mui/material'
import "../Components/Post.css"

export default function Post(props) {
  return (
    <div className='Post'>

      {/* header -> Avator + User Name  */}
      <div className="post__header">
      <Avatar className="post__avator" alt={props.userName} src="/static/images/avatar/1.jpg" />
      <h3>{props.userName}</h3>
      </div>

      {/* Image  */}
      <img className="post__image" src={props.imageURL} alt="picture of cat" />

      {/* UserName + Caption  */}
      <h3 className='post__text'><strong> {props.userName} </strong>{props.caption}</h3>

    </div>
  )
}
