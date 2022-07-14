import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {

    const recentItem = (topic) => {
        return (
            <div className='recentItem'>
                <span className='hastag'>#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img
                    src='https://images.pexels.com/photos/7130488/pexels-photo-7130488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                />
                <Avatar className='sidebar-avatar' />
                <h2>Divyam Sharma</h2>
                <h4>CEO of HealthCare Ltd.</h4>
            </div>
            <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <p>Who viewed your profile</p>
                    <p className='sidebar-stat-num'>22</p>
                </div>
                <div className='sidebar-stat'>
                    <p>Impressions of your post</p>
                    <p className='sidebar-stat-num'>4,343</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p style={{ color: "rgba(24, 104, 195, 0.625)" }}>Recent</p>
                {recentItem("hiring")}
                {recentItem("internship")}
                {recentItem("software__enginner")}
                {recentItem("computer__science")}
                <br />
                <p style={{ color: "rgba(24, 104, 195, 0.625)" }}>Groups</p>
                {recentItem("The Sparks Foundation")}
                {recentItem("GeeksforGeeks")}
                {recentItem("React Developers - ReactJS")}
                <br />
                <hr />
                <span className='discover-button'>
                    Discover More
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
