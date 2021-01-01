import { Avatar } from "@material-ui/core";
import React ,{forwardRef} from "react";
import InputOptions from "./InputOptions";
import "./Posts.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';



const Posts =forwardRef( ({ name, description, message, imageUrl },ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar src ={imageUrl}>
          {name[0]}
        </Avatar>
        <div className="post-info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="#dddcdc" />
        <InputOptions Icon={ChatIcon} title="Comment" color="#cacaca" />
        <InputOptions Icon={ShareIcon} title="Share" color="#1adf6c" />
      
      </div>
    </div>
  );
}
)

export default Posts;
