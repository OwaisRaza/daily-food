
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_API_KEY } from '../../config/index';
import Logo from '../logo/Logo'

class Signin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLogined: false,
          accessToken: ''
        };
    
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
    }
      // Login function start
      login (response) {
        if(response.accessToken){
          this.setState(state => ({ 
            isLogined: true,
            accessToken: response.accessToken
          }));
          localStorage.setItem('user', JSON.stringify(response.profileObj));
          this.props.history.push('/dashboard') 
        }
      }
      // Login function end

      // Login error handler function start
      handleLoginFailure (response) {
        console.log('Failed to log in', response)
      }
      // Login error handler function end

    render() { 
        return ( 
          <div className="signin">
           <video autoPlay loop playsInline muted> 
              <source src="https://2017-media.weareenvoy.net/hero_vizio.mp4" type="video/mp4" />
            </video>
            <div className="signin-wrapper">   
              <Logo title='react' tagLine="Digital food menu for react" />     
              <GoogleLogin
              clientId={ GOOGLE_API_KEY }
              buttonText='Signin with google'
              onSuccess={ this.login }
              onFailure={ this.handleLoginFailure }
              cookiePolicy={ 'single_host_origin' }
              responseType='code,token'
              />
            </div>  
        </div>
      
         );
    }
}
 
export default Signin;