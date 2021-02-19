import React from 'react'
import GoogleLogin from 'react-google-login'
import {selectSigned, setSignedIn, setUserData} from "../features/userSlice"
import { useSelector,  useDispatch } from 'react-redux';
import '../styling/homepage.css'

const Homepage = () => {
    const dispatch = useDispatch();
    const login = (res) => {
        console.log(res);
        dispatch(setSignedIn(true));
        dispatch(setUserData(res.profileObj))
    }
    const isSignedIn = useSelector(selectSigned);
    

    return (
        <div className="home__page" style={{display:isSignedIn ? "none" : ""}}>
           {
               !isSignedIn ? (
                <div className="login__message">
                <h2>📗</h2>
                <h1>A readers Favourite place!</h1>
                <p>
                    We Provide high quality online resource for reading blogs. 
                    Just Sign up and start reading some quality blogs.
                </p>
                <GoogleLogin
                    clientId="276401935074-aoli9op1f5iodoecgp74utb2mv8553gq.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}
                        className="login__button"

                        > Login with Google
                        </button>
                      )}
                      onSuccess={login}
                      onFailure={login}
                      isSignedIn={true}
                      cookiePolicy={'single_host_origin'}
                       
                
                />
            </div>
        
               ) : (
                   " "
               )
           }
            
        </div>
    )
}

export default Homepage
