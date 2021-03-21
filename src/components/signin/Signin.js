
import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '948233575673-eiad8rlgfdt52mtc0d42t5l88rbhtju0.apps.googleusercontent.com';


class Signin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLogined: false,
          accessToken: ''
        };
    
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

      login (response) {
          console.log('login', response)
        if(response.accessToken){
          this.setState(state => ({ 
            isLogined: true,
            accessToken: response.accessToken
          }));
        }
      }

      logout (response) {
        console.log('logout', response)
        this.setState(state => ({
          isLogined: false,
          accessToken: ''
        }));
      }

      handleLoginFailure (response) {
        console.log('Failed to log in', response)
      }

      handleLogoutFailure (response) {
        // alert('Failed to log out')
      }

    render() { 
        return ( 
            <div className="signin-container">
                <GoogleLogin
                clientId={ CLIENT_ID }
                buttonText='Login'
                onSuccess={ this.login }
                onFailure={ this.handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
                />
                <GoogleLogout
                    clientId={ CLIENT_ID }
                    buttonText='Logout'
                    onLogoutSuccess={ this.logout }
                    onFailure={ this.handleLogoutFailure }
                    >
                  </GoogleLogout>
            </div>
         );
    }
}
 
export default Signin;