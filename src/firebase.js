import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCr9y7_FNzhI2P3xM2l_obHPWH64O4P0kY",
    authDomain: "my-firebase-react-app-f94ca.firebaseapp.com",
    projectId: "my-firebase-react-app-f94ca",
    storageBucket: "my-firebase-react-app-f94ca.firebasestorage.app",
    messagingSenderId: "783737883023",
    appId: "1:783737883023:web:18f1a0405bece6478da3fa",
    measurementId: "G-5MCZF5V505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Listener to change state
export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export { auth, googleProvider, facebookProvider, signInWithPopup };