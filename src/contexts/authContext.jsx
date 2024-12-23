import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";
import { getToken, removeToken, setToken } from "../utils/tokenService";
import { logout } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [showLoginPopUp, setShowLoginPopUp] = useState(false);

    const setLoginPopupVisibility = (value) => {
        setShowLoginPopUp(value);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setUserLoggedIn(true); // User is logged in based on token
        } else {
            setUserLoggedIn(false); // No token means user is logged out
        }
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            saveUserSession({
                email: user.email,
                token: user.refreshToken,
                id: user.uid,
                username: user.displayName,
            });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
        }
        setAuthLoading(false);
    }
    const saveUserSession = (user) => {
        const { email, token, id, username } = user;
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("id", id);
        setToken(token);
        setUserLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        removeToken();
        Cookies.remove("jwt_token");
        setUserLoggedIn(false);
        logout();
    };

    const getUserSessionData = () => {
        const email = localStorage.getItem("email") || "";
        const token = getToken();
        const id = localStorage.getItem("id") || "";
        const username = localStorage.getItem("username") || "";
        return { email, token, id, username };
    };

    const value = {
        currentUser,
        userLoggedIn,
        authLoading,
        saveUserSession,
        getUserSessionData,
        handleLogout,
        setLoginPopupVisibility,
        showLoginPopUp,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
