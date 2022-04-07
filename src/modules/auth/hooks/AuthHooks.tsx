//For Firebase Auth
import {getUserFromFirebase} from '../helpers';
import {useFirebase, useFirebaseActions} from '../providers/FirebaseAuthProvider';

export const useAuthUser = () => {
  const {user, isAuthenticated, isLoading} = useFirebase();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromFirebase(user),
  };
};

export const useAuthMethod = () => {
  const {signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, logout} =
    useFirebaseActions();

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    logout,
  };
};
