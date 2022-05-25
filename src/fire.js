import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBBYvDsw2jSdqZ-lKFxBR9W1RAsT_L0APw",
  authDomain: "gamestore-c7dcc.firebaseapp.com",
  projectId: "gamestore-c7dcc",
  storageBucket: "gamestore-c7dcc.appspot.com",
  messagingSenderId: "14358326946",
  appId: "1:14358326946:web:493b92b54974a8b97f71fb"
};

const fire = firebase.initializeApp(firebaseConfig)


export default fire;