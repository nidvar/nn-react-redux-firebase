import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyAVu5MBWvH_N6NhiaNOZZVWFRgxvIGR1dM",
    authDomain: "nn-react-redux-firebase.firebaseapp.com",
    databaseURL: "https://nn-react-redux-firebase.firebaseio.com",
    projectId: "nn-react-redux-firebase",
    storageBucket: "nn-react-redux-firebase.appspot.com",
    messagingSenderId: "329870616037",
    appId: "1:329870616037:web:65cd0dc68dbe787f51bb0c",
    measurementId: "G-8JTYTM4X0J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore.settings({timestampsInSnapshots:true})

  export default firebase