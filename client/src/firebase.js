import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBpjcrcv2RXNmhZBoSVOvmZvcA_b5iG0J0',
  authDomain: 'youtbe-6cbb9.firebaseapp.com',
  projectId: 'youtbe-6cbb9',
  storageBucket: 'youtbe-6cbb9.appspot.com',
  messagingSenderId: '724475655379',
  appId: '1:724475655379:web:41743e19b740b3ea019026',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
