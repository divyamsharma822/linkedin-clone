import React from "react";
import "./FeedIcon.scss";

const FeedIcon = ({ title, Icon, sx }) => {
    return (
        <div className='feedicon'>
            {Icon && <Icon className='icon' sx={sx} />}
            <span>{title}</span>
        </div>
    );
};

export default FeedIcon;
