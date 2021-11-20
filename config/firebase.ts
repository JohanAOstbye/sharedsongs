import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {
  getAuth,
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

type configType = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const config: configType = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);

const uiConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    TwitterAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  tosUrl: '/info/terms-of-service',
  privacyPolicyUrl: '/info/privacy-policy',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      false,
  },
};

export {
  config,
  uiConfig,
  app,
  db,
  auth,
  collection,
  getDocs,
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
};
