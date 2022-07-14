import React, { useEffect, useState } from "react";
import "./Feed.scss";
import profile from "../../assets/img/profile.jpeg";
import FeedIcon from "../FeedIcon/FeedIcon";
import { db } from "../../firebase";
import {
    collection,
    onSnapshot,
    doc,
    setDoc,
    serverTimestamp,
    orderBy,
    query,
} from "firebase/firestore";

import {
    Article,
    Event,
    PhotoSizeSelectActual,
    VideoLibrary,
} from "@mui/icons-material";
import Post from "../Post/Post";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {

        const getPosts = () => {
            const q = query(
                collection(db, "posts"),
                orderBy("timestamp", "desc")
            );
            onSnapshot(q, (querySnapshot) => {
                let arr = [];
                querySnapshot.forEach((doc) => {
                    arr.push({ id: doc.id, data: doc.data() });
                });

                setPosts(arr);
            });
        };
        getPosts();
    // eslint-disable-next-line
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        const posts = doc(collection(db, "posts"));
        setDoc(posts, {
            name: "Divyam Sharma",
            description: "this is a test",
            message: input,
            photoUrl: "",
            timestamp: serverTimestamp(),
        });

        setInput('');
    };

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-input'>
                    <img src={profile} alt='' />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Start a post'
                            type='text'
                        />
                        <button onClick={sendPost} type='submit'></button>
                    </form>
                </div>
                <div className='feed-icons'>
                    <FeedIcon
                        title='Photo'
                        Icon={PhotoSizeSelectActual}
                        sx={{ color: "rgb(55,143,233)" }}
                    />
                    <FeedIcon
                        title='Video'
                        Icon={VideoLibrary}
                        sx={{ color: "rgb(95,155,65)" }}
                    />
                    <FeedIcon
                        title='Event'
                        Icon={Event}
                        sx={{ color: "rgb(195,125,48)" }}
                    />
                    <FeedIcon
                        title='Write Article'
                        Icon={Article}
                        sx={{ color: "rgb(224,103,69)" }}
                    />
                </div>
            </div>

            {/* Posts */}
            {posts.map(
                ({ id, data: { name, description, message, photoUrl } }) => {
                    return (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    );
                }
            )}
        </div>
    );
};

export default Feed;
