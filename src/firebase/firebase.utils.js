import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
 export {signInWithEmailAndPassword};

export {onAuthStateChanged};
export {createUserWithEmailAndPassword}
const config = {
    apiKey: "AIzaSyClWlhVXLETtoL119LuvaD1ei6k7uYHAPY",
    authDomain: "rama-coffee-house.firebaseapp.com",
    projectId: "rama-coffee-house",
    storageBucket: "rama-coffee-house.appspot.com",
    messagingSenderId: "763165532586",
    appId: "1:763165532586:web:41fcc268dc4c9e3ba00bd3",
    measurementId: "G-WVL9XGWNTL"
  };

  initializeApp(config);

  export const auth= getAuth();
  export const firestore= getFirestore();

 const provider = new GoogleAuthProvider();

 provider.setCustomParameters({prompt: 'select_account'});

 export const signInWithGoogle = () => {
    //  we have to always wrap signInWithPopup method inside a function in order for there working
     signInWithPopup( auth, provider).then((result) => {
           // This gives you a Google Access Token. You can use it to access the Google API.
           const creadential = GoogleAuthProvider.creadentialFromResult(result);
           const token= creadential.accessToken;

           console.log(token);
     }) .catch((error)=> console.log(error))
 }


//  making snapshot called userRef from google auth api
export const createUserProfileDocument = async (userAuth, additionalData) => {
     if(!userAuth)
         return;

    const userRef = doc(firestore, ` users/${userAuth.uid} ` );

    const snapshot = await getDoc(userRef);
    if(!snapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error){
            console.log('error creating user', error.message);
        } 
    }
    return userRef;
     
 }

 export default firebase;