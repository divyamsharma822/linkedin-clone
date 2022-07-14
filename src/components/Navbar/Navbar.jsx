import {
    Apps,
    Brightness4,
    BusinessCenter,
    Chat,
    Home,
    Logout,
    NotificationsActive,
    Search,
    SupervisorAccount,
} from "@mui/icons-material";
import React from "react";
import NavOption from "../NavOption/NavOption";
import "./Navbar.scss";
import linkdenlogo from "../../assets/img/linkedin.png";


import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logout } from '../../features/userSlice';

const Navbar = () => {

    const dispatch = useDispatch();

    const handleSignout = () => {
        
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={linkdenlogo} alt='' />
                <div className='navbar-search'>
                    <Search />
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>
            <div className='navbar-right'>
                <NavOption title='Home' Icon={Home} />
                <NavOption title='My Network' Icon={SupervisorAccount} />
                <NavOption title='Jobs' Icon={BusinessCenter} />
                <NavOption title='Messaging' Icon={Chat} />
                <NavOption title='Notifications' Icon={NotificationsActive} />
                <NavOption
                    title='Me'
                    avatar='https://www.w3schools.com/howto/img_avatar.png'
                />
                <hr/>
                <NavOption title='Work' Icon={Apps} sx={{marginLeft: '10px'}}/>
                {/* <NavOption title='Dark mode' Icon={Brightness4}/> */}
                <button class="logout-button" onClick={handleSignout}><NavOption title='Logout' Icon={Logout}/></button>
            </div>
        </div>
    );
};

export default Navbar;
