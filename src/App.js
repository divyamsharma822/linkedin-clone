import React from "react";
import "./App.scss";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/Widget/Widget";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlice";

const App = () => {

    const user = useSelector(selectUser);

    return (
        <div className='app'>
            {!user ? ( 
                <Login />
            ) : (
                <>
                    <Navbar />
                    <div className='app-body'>
                        <Sidebar />
                        <Feed />
                        <Widget />
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
