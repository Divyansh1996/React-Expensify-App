import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const Login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        return signInWithPopup(auth,provider);
    }
}

export const Logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        const auth = getAuth();
        return signOut(auth);
    }
}