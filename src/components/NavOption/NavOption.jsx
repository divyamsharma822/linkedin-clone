import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./NavOption.scss";

const NavOption = ({ title, Icon, avatar ,sx }) => {
    return (
        <div className='navOption' style={sx}>
            {Icon && <Icon className='nav-icon' />}
            {avatar && <Avatar className='nav-icon' src={avatar} />}
            <span>
                {title} {avatar && <ArrowDropDown />}
            </span>
        </div>
    );
};

export default NavOption;
