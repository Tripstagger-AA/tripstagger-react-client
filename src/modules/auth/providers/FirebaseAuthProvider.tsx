import {AuthUser} from '@app/models/index';
import {fetchError, fetchStart, fetchSuccess} from '@app/redux/actions/Common';
import React, {createContext, ReactNode, useContext, useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from './firebase';

interface FirebaseContextProperties {
  user: AuthUser | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface SignUpProperties {
  name: string;
  email: string;
  password: string;
}

interface SignInProperties {
  email: string;
  password: string;
}

interface FirebaseActionsProperties {
  createUserWithEmailAndPassword: (data: SignUpProperties) => void;
  signInWithEmailAndPassword: (data: SignInProperties) => void;
  signInWithPopup: (type: string) => void;
  logout: () => void;
}

const FirebaseContext = createContext<FirebaseContextProperties>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});
const FirebaseActionsContext = createContext<FirebaseActionsProperties>({
  createUserWithEmailAndPassword: () => {},
  signInWithEmailAndPassword: () => {},
  signInWithPopup: () => {},
  logout: () => {},
});

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseActions = () => useContext(FirebaseActionsContext);

interface FirebaseAuthProviderProperties {
  children: ReactNode;
}

const FirebaseAuthProvider: React.FC<FirebaseAuthProviderProperties> = ({children}) => {
  const [firebaseData, setFirebaseData] = useState<FirebaseContextProperties>({
    user: null,
    isLoading: false,
    isAuthenticated: false,
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getAuthUser = auth.onAuthStateChanged(
  //     (user) => {
  //       setFirebaseData({
  //         user: user as AuthUser,
  //         isAuthenticated: Boolean(user),
  //         isLoading: false,
  //       });
  //     },
  //     () => {
  //       setFirebaseData({
  //         user: firebaseData.user,
  //         isLoading: false,
  //         isAuthenticated: false,
  //       });
  //     },
  //     () => {
  //       setFirebaseData({
  //         user: firebaseData.user,
  //         isLoading: false,
  //         isAuthenticated: true,
  //       });
  //     }
  //   );
  //
  //   return () => {
  //     getAuthUser();
  //   };
  // }, [firebaseData.user]);

  const getProvider = (providerName: string) => {
    switch (providerName) {
      case 'google': {
        return googleAuthProvider;
      }
      case 'facebook': {
        return facebookAuthProvider;
      }
      case 'twitter': {
        return twitterAuthProvider;
      }
      case 'github': {
        return githubAuthProvider;
      }
      default:
        return googleAuthProvider;
    }
  };

  const signInWithPopup = async (providerName: string) => {
    dispatch(fetchStart());
    try {
      const {user} = await auth.signInWithPopup(getProvider(providerName));
      setFirebaseData({
        // user: user as AuthUser,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({message}) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };

  const signInWithEmailAndPassword = async ({email, password}: SignInProperties) => {
    dispatch(fetchStart());
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password);
      setFirebaseData({
        user: user as AuthUser,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({message}) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };
  const createUserWithEmailAndPassword = async ({name, email, password}: SignUpProperties) => {
    dispatch(fetchStart());
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await auth!.currentUser!.sendEmailVerification({
        url: window.location.href,
        handleCodeInApp: true,
      });
      await auth!.currentUser!.updateProfile({
        displayName: name,
      });
      setFirebaseData({
        user: {...user, displayName: name} as AuthUser,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch(fetchSuccess());
    } catch ({message}) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch(fetchError(message as string));
    }
  };

  const logout = async () => {
    setFirebaseData({...firebaseData, isLoading: true});
    try {
      await auth.signOut();
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch {
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <FirebaseActionsContext.Provider
        value={{
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
          signInWithPopup,
          logout,
        }}
      >
        {children}
      </FirebaseActionsContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseAuthProvider;
