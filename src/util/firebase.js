import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDCPOAHKo7f-9HXgJ9iXIx_kOQuAldTg0A',
  authDomain: 'miraski2025.firebaseapp.com',
  projectId: 'miraski2025',
  storageBucket: 'miraski2025.appspot.com',
  databaseURL:
    'https://miraski2025-default-rtdb.europe-west1.firebasedatabase.app/',
  messagingSenderId: '945379362319',
  appId: '1:945379362319:web:13c9693c2b7e95e4c2857a',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)

export default app
