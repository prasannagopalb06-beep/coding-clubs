var firebaseConfig = {
  apiKey: "AIzaSyCSbX67PVF6m3NQjZI_Vf2Ak3SVuICrs0g",
  authDomain: "quiz-e063a.firebaseapp.com",
  databaseURL: "https://quiz-e063a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "quiz-e063a",
  storageBucket: "quiz-e063a.firebasestorage.app",
  messagingSenderId: "98823949249",
  appId: "1:98823949249:web:8b9224021be25051cebd40",
  measurementId: "G-NVCYDJ32EM"
};

firebase.initializeApp(firebaseConfig);

// Reference to the buzzer node
var db = firebase.database().ref("buzzer");