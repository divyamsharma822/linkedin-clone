import { Avatar } from "@mui/material";
import React from "react";
import FeedIcon from "../FeedIcon/FeedIcon";
import "./Post.scss";
import { ReactComponent as CommentIcon } from "../../assets/images/comment-icon.svg";
import { ReactComponent as LikeIcon } from "../../assets/images/like-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/images/share-icon.svg";
import { ReactComponent as SendIcon } from "../../assets/images/send-icon.svg";

const Post = ({ name, description, message, photoUrl }) => {
    
    return (
        
        <div className='post'>
            <div className='post-header'>
                <Avatar src={photoUrl} />
                <div className='post-info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post-body'>
                <p>{message}</p>
            </div>
            <div className='hr' />
            <div className='post-icons'>
                <button style={{ border: "none",outline: "none",background: "transparent" }}>
                    <FeedIcon title='Like' Icon={LikeIcon} />
                </button>
                <FeedIcon title='Comment' Icon={CommentIcon} />
                <FeedIcon title='Share' Icon={ShareIcon} />
                <FeedIcon title='Send' Icon={SendIcon} />
            </div>
        </div>
    );
};

export default Post;
