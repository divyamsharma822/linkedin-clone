import { HelpOutline, KeyboardArrowDown } from "@mui/icons-material";
import React from "react";
import Tag from "../Tag/Tag";
import "./Widget.scss";
import logo from '../../assets/images/login-logo.svg';
import Info from '../../assets/images/feed-icon.svg';

const Widget = () => {

    return (
        <div className='widget'>
            <div className='news'>
                <div className='news-header'>
                    <span>LinkedIn News</span>
                    <img src={Info} alt='' />
                </div>
                <div className='news-list'>
                    <ul>
                        <li>The Top Voices freshers should follow</li>
                        <span>Top news • 12,868 readers</span>

                        <li>Techies dump startups for IT firms</li>
                        <span>10d ago • 38,228 readers</span>

                        <li>More layoffs in Indian edtech</li>
                        <span>2d ago • 12,494 readers</span>

                        <li>Tips to negotiate your salary</li>
                        <span>9d ago • 36,028 readers</span>

                        <li> IT employees keen on back-to-office</li>
                        <span>5d ago • 8,290 readers</span>
                    </ul>
                    <span className='more-button'>
                        <span>Show more</span>
                        <KeyboardArrowDown />
                    </span>
                </div>
            </div>
            <div className='tags'>
                <Tag title='About' />
                <Tag title='Accessibility' />
                <Tag title='Help Center' />
                <br />
                <Tag title='Privacy & Terms' Icon={KeyboardArrowDown} />
                <Tag title='Ad Choices' />
                <br />
                <Tag title='Advertising' />
                <Tag title='Business Services' Icon={KeyboardArrowDown} />
                <br />
                <Tag title='Get the LinkedIn' />
            </div>
            <br />
            <div className='widget-bottom'>
                <img src={logo} alt='' />
                <span >LinkedIn Corporation © 2022</span>
            </div>

        </div>
    );
};

export default Widget;
