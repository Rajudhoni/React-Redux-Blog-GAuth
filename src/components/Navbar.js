import React, {useState} from 'react';
import {selectSignedIn} from "../features/userSlice";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);


    return (
        <div>
            <h1 className="navbar__header">BlogMania 💬</h1>
            {isSignedIn && (<div className="blog__search">
                <input className="search" placeholder="search for a blog" 
                       value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="submit" onClick={handleClick}> Search</button>
            </div>
            ) }
            {isSignedIn ?}
        </div>
    )
}