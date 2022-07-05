//Importação CommonJS modules - Firebase SDKs
const firebase = require('firebase/app');

//configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,

};

/* const firebaseConfig = {
    apiKey: "AIzaSyCN9-JqWcryJJy1w-I_XDSb4-X3jbJMDIA",
    authDomain: "taferasweb.firebaseapp.com",
    projectId: "taferasweb",
    storageBucket: "taferasweb.appspot.com",
    messagingSenderId: "819513945834",
    appId: "1:819513945834:web:2fecde0997176bb733b193"
  }; */
  

//Inicializar App Firebase
const app = firebase.initializeApp(firebaseConfig); 

console.log(app);

module.exports = app;

