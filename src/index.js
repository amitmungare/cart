import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBPz5-Cs0n6zqsGL615hq523ZiJX8g5GGU",
  authDomain: "cart-87ab6.firebaseapp.com",
  projectId: "cart-87ab6",
  storageBucket: "cart-87ab6.appspot.com",
  messagingSenderId: "926432665722",
  appId: "1:926432665722:web:034cd825ccf202144bdbc3"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />,document.getElementById('root'));