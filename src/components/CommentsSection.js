import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/CommentsSection.css'

function CommentsSection({imageUrl,name,comment}) {
    return (
        <div className="comments">
           
               <Avatar src={imageUrl} >
                   {name[0]}
                   </Avatar>
                   <h5>{name}</h5>
                   <p>{comment}</p>
           
        </div>
    )
}

export default CommentsSection
