import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDhoMA9oGQaCKw82PdOmGfIi2OHVqVsGRE',
  authDomain: 'instagram-c890a.firebaseapp.com',
  projectId: 'instagram-c890a',
  storageBucket: 'instagram-c890a.appspot.com',
  messagingSenderId: '875099079481',
  appId: '1:875099079481:web:6373966a30d42f11a89ee8'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file ( only once )

// seedDatabase(firebase);
// console.log('firebase', firebase);
export { firebase, FieldValue };
