import React, { useState } from "react";
import "./Login.scss";

import logo from "../../assets/images/login-logo.svg";
import banner from "../../assets/images/4204968.jpg";
import googleLogo from "../../assets/images/google.svg";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setprofilePic] = useState("");

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(
                    login({
                        email: userCredential.user.email,
                        uid: userCredential.user.uid,
                        displayName: userCredential.user.displayName,
                        photoURL: userCredential.user.photoURL,
                    })
                );
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userCredential.user.email,
                                uid: userCredential.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleLoginWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(login({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    uid: result.user.uid,
                    photoURL: result.user.photoURL,
                }))
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='login'>
            <img src={logo} alt='' className='img1' />
            <div className='login-container'>
                <div className='left'>
                    <img src={banner} alt='' className='img2' />
                </div>
                <div className='right'>
                    <form>
                        <h1>Welcome</h1>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name ( if signup )'
                        />
                        <br />
                        <input
                            type='text'
                            value={profilePic}
                            onChange={(e) => setprofilePic(e.target.value)}
                            placeholder='Profile pic url ( optional )'
                        />
                        <br />
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email or Phone'
                        />
                        <br />
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                        <div className='button-group'>
                            <button type='submit' onClick={handleLogin}>
                                LogIn
                            </button>
                            <button type='button' onClick={handleSignUp}>
                                Sign Up
                            </button>
                        </div>
                        <h2>
                            <span>or</span>
                        </h2>
                        <button type='button' onClick={handleLoginWithGoogle}>
                            <img src={googleLogo} alt=''/>
                            Continue with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
