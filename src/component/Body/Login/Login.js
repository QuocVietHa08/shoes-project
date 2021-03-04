import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../../../firebase';
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import firebase from 'firebase';
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        alert('You have log in');
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if we create successful an account the page will push we to the homepage
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  const faceBookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        alert('you have login with Facebook');
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const appleSignIn = () => {
    var provider = new firebase.auth.OAuthProvider('apple.com');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h4>E-mail</h4>
          <div className='login__input'>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <h4>Password</h4>
          <div className='login__input'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' onClick={signIn}>
            Sign In
          </button>
          <p>
            By sign in you agree with our conditional to brings to you best
            shoes with highest quality in the market
          </p>
          <button onClick={register}>Create your account</button>
        </form>
      </div>
      <div className='login__container'>
        <h2>Or</h2>
        <div onClick={faceBookSignIn} className='login__option'>
          <FacebookIcon />
          <p>Login with Facebook</p>
        </div>

        <div onClick={appleSignIn} className='login__option'>
          <AppleIcon />
          <p>Login with Apple</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
