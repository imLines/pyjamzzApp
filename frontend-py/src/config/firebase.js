import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "firebase-adminsdk-5nrcy@pyjamzz.iam.gserviceaccount.com",
    projectId: "pyjamzz",
    storageBucket: "gs://pyjamzz.appspot.com",
    messagingSenderId: "8836689580",
    appId: "pyjamzz"
};
    
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  
export default storage;