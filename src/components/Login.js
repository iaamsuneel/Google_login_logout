import React, { useEffect, useState } from "react"
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from "gapi-script";
const Login = () => {
    const [showLoginButton, setShowLoginButton] = useState(true)
    const [showLogoutButton, setShowLogoutButton] = useState(false)
    const clientId = "153269249468-q4eesptikbgt4vod0k8fuf26842ecum8.apps.googleusercontent.com"
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onLoginSuccess = (res) => {
        console.log("onLoginSuccess", res.profileObj)
        setShowLoginButton(false)
        setShowLogoutButton(true)
    }
    const onFailureSuccess = (res) => {
        console.log("onLoginFailure", res)
    }
    const onSignoutSuccess = () => {
        alert("You have Successfully logout!")
        setShowLoginButton(true)
        setShowLogoutButton(false)
    }
    return (<>
        <div className="g-signin">
            <span> Login with Google</span> <br /><br />
            {showLoginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailureSuccess}
                    // autoLoad={false}
                    cookiePolicy={'single_host_origin'}

                /> : null}
            <br /><br />

            {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout>
                : null}
        </div>
    </>)
}
export default Login