import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA_-AMo0MrY_jk1A4zxNeF5ZXdAhCtDX90',
  authDomain: 'shoes-project-81cb7.firebaseapp.com',
  projectId: 'shoes-project-81cb7',
  storageBucket: 'shoes-project-81cb7.appspot.com',
  messagingSenderId: '374631617201',
  appId: '1:374631617201:web:a11d14440954d0d95f0890',
  measurementId: 'G-JTY8PWVSJE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
