// BD.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js';
import { getDatabase, ref, push, update, onValue, remove, set, get } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1KOuN6bs6rMia1Qt9zqQEMmSR2k2HX60",
  authDomain: "contole-de-pda.firebaseapp.com",
  databaseURL: "https://contole-de-pda-default-rtdb.firebaseio.com",
  projectId: "contole-de-pda",
  storageBucket: "contole-de-pda.firebasestorage.app",
  messagingSenderId: "40338306375",
  appId: "1:40338306375:web:0a417b5987b2baeddec862",
  measurementId: "G-794E60Z7SL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exportar
export { database, ref, push, update, onValue, remove, set, get };
