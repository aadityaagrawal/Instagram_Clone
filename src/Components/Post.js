import React from 'react'
import { Avatar } from '@mui/material'
import "../Components/Post.css"

export default function Post() {
  return (
    <div className='Post'>

      {/* header -> Avator + User Name  */}
      <div className="post__header">
      <Avatar className="post__avator" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <h3>User Name</h3>
      </div>

      {/* Image  */}
      <img className="post__image" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="picture of cat" />

      {/* UserName + Caption  */}
      <h3 className='post__text'><strong> UserName: </strong>Lorem ipsum dolor sit amet.</h3>

    </div>
  )
}
