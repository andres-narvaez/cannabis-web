import firebase from 'firebase/app';
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyA4yL1n8TmtNHrlYAgyTr4ouY3thbQtZKs",
    authDomain: "cannabis-web.firebaseapp.com",
    projectId: "cannabis-web",
    storageBucket: "cannabis-web.appspot.com",
    messagingSenderId: "888632889575",
    appId: "1:888632889575:web:61b2baee7c59ebf6eb1242",
    measurementId: "G-WW08DCJNHC"
};

firebase.initializeApp(firebaseConfig)
export const analytics = firebase.analytics();
