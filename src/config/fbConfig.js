import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxcrsY_lQql_RGakvkWb6p9tbYp2RWzGM",
    authDomain: "projectplan-backend.firebaseapp.com",
    databaseURL: "https://projectplan-backend.firebaseio.com",
    projectId: "projectplan-backend",
    storageBucket: "projectplan-backend.appspot.com",
    messagingSenderId: "641094132766",
    appId: "1:641094132766:web:24d29d4163b85aba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings();

export default firebase;