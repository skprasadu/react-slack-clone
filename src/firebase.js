import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyABxugFiAKE87qWNkw69r36a5JXjxz1nbw",
  authDomain: "react-slack-clone-153ec.firebaseapp.com",
  databaseURL: "https://react-slack-clone-153ec.firebaseio.com",
  projectId: "react-slack-clone-153ec",
  storageBucket: "react-slack-clone-153ec.appspot.com",
  messagingSenderId: "420258319774"
};
firebase.initializeApp(config);

export default firebase;