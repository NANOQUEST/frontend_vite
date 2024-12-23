// import React, { useState, useEffect } from "react";
// import axios from "../../axios";
// import { useNavigate } from "react-router";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// import {
//     auth,
//     signInWithGoogle,
//     logInWithEmailAndPassword,
//     registerWithEmailAndPassword,
// } from "../../firebase";
// import { toast } from "react-toastify";
// import logo from "../../assets/NqLogo.png";
// import { useAuth } from "../../contexts/authContext";

// const LoginPopup = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [showSignUp, setShowSignUp] = useState(false);
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [loader, setLoader] = useState({
//         signup: false,
//         firebaseSignup: false,
//         login: false,
//         firebaseLogin: false,
//     });
//     const [password, setPassword] = useState("");
//     const [err, setError] = useState("");
//     const [user, loading] = useAuthState(auth);
//     const navigate = useNavigate();
//     const { saveUserSession, setLoginPopupVisibility, userLoggedIn } =
//         useAuth();

//     useEffect(() => {
//         if (!loading && user) {
//             navigate("/");
//         }
//     }, [user, loading, navigate]);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     useEffect(() => {
//         const storedEmail = localStorage.getItem("email");
//         if (storedEmail) {
//             setLoginPopupVisibility(false);
//             navigate("/");
//         }
//     }, [navigate, email]);

//     // login functions
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             toast.error("Please enter email and password");
//             return;
//         }

//         try {
//             await logInWithEmailAndPassword(email, password);
//             const response = await axios.post(
//                 "/users/login",
//                 { email, password },
//                 { headers: { "Content-Type": "application/json" } }
//             );
//             const { token, name, id } = response.data.data;
//             saveUserSession({ email, id, token, name });
//             setLoginPopupVisibility(false);
//             toast.success(response?.data?.message || "Login successful");
//             navigate("/");
//         } catch (error) {
//             console.error("Login failed:", error);
//             setError("Login failed. Please try again.");
//             toast.error(
//                 error?.response?.data?.message ||
//                     "Login failed. Please try again."
//             );
//         }
//         setEmail("");
//         setPassword("");
//     };

//     const handleFirebaseLogin = async () => {
//         try {
//             setLoginPopupVisibility(false);
//             await signInWithGoogle();
//             localStorage.setItem("userEmail ", true);
//             toast.success("Login with Google successful");
//         } catch (error) {
//             console.error("Firebase login failed:", error);
//             toast.error("Firebase login failed. Please try again.");
//         }
//     };

//     // signup functions
//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         if ([name, email, password].some((field) => !field.trim())) {
//             toast.error("Please enter all fields");
//             return;
//         }

//         // if (password.length < 6) {
//         //     toast.error("Password must be at least 6 characters long");
//         //     return;
//         // }

//         try {
//             await registerWithEmailAndPassword(name, email, password); // Firebase registration
//             const response = await axios.post("/users/signup", {
//                 name,
//                 email,
//                 password,
//             });
//             setShowSignUp((prev) => !prev);
//             setLoginPopupVisibility(false);
//             toast.success(response?.data?.message || "Sign up successful");
//         } catch (err) {
//             console.error("Sign up error:", err);
//             setError(
//                 err?.response?.data?.message ||
//                     "Sign up failed. Please try again."
//             );

//             toast.error(
//                 err?.response?.data?.message ||
//                     "Sign up failed. Please try again."
//             );
//         }
//         setName("");
//         setEmail("");
//         setPassword("");
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto pt-[140px]">
//             <div className="relative h-auto w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[30%] bg-white rounded-xl shadow-lg m-3">
//                 <button
//                     onClick={() => setLoginPopupVisibility(false)}
//                     className="absolute top-2 right-2 text-black text-md hover:text-gray-900"
//                 >
//                     &times;
//                 </button>
//                 <div className="p-5 sm:p-8 rounded-l">
//                     <div className="flex items-center mb-4">
//                         <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
//                         <h1 className="text-2xl font-bold">
//                             {showSignUp ? "Sign Up" : "Login"}
//                         </h1>
//                     </div>
//                     <form onSubmit={showSignUp ? handleSignUp : handleLogin}>
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="mt-1 p-1 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm"
//                             />
//                         </div>

//                         {showSignUp && (
//                             <div className="mb-4">
//                                 <label
//                                     htmlFor="username"
//                                     className="block font-medium text-gray-700 text-sm"
//                                 >
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className="mt-1 p-1 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm"
//                                 />
//                             </div>
//                         )}

//                         <div className="mb-4 relative">
//                             <label
//                                 htmlFor="password"
//                                 className="block font-medium text-gray-700 text-sm"
//                             >
//                                 Password
//                             </label>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="mt-1 p-1 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-sm"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={togglePasswordVisibility}
//                                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 pt-4"
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                         {err && (
//                             <p className="text-red-500 text-sm mb-4">{err}</p>
//                         )}
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white py-1 rounded-full hover:bg-blue-600"
//                         >
//                             {showSignUp ? "Sign Up" : "Login"}
//                         </button>
//                         <p className="text-center text-gray-500 m-1 text-sm">
//                             {showSignUp ? "or sign up with" : "or login with"}
//                         </p>

//                         <button
//                             type="button"
//                             className="w-full flex items-center justify-center bg-red-500 text-white py-1 rounded-full hover:bg-red-600"
//                             onClick={handleFirebaseLogin}
//                         >
//                             <FaGoogle className="mr-2 bg-transparent" /> Google
//                         </button>
//                         <p
//                             className="text-gray-400 text-sm cursor-pointer hover:text-blue-500 mt-4"
//                             onClick={() => setShowSignUp(!showSignUp)}
//                         >
//                             {showSignUp
//                                 ? "Already have an account? Login here"
//                                 : "No Account? Create an account here"}
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPopup;

import { useState, useEffect } from "react";
import axios from "../axios";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
} from "../firebase";
import { toast } from "react-toastify";
import logo from "../assets/NqLogo.png";
import { useAuth } from "../contexts/authContext";
import Loader from "./loader";

const INITIAL_FORM_DATA = {
    email: "",
    username: "",
    password: "",
};

const INITIAL_LOADER = {
    signup: false,
    login: false,
    firebaseLogin: false,
};
const LoginPopup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [loader, setLoader] = useState(INITIAL_LOADER);
    const [error, setError] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { saveUserSession, setLoginPopupVisibility } = useAuth();

    useEffect(() => {
        if (!loading && user) {
            navigate("/");
        }
    }, [user, loading, navigate]);

    useEffect(() => {
        setFormData(INITIAL_FORM_DATA);
        setError("");
        setLoader(INITIAL_LOADER);
    }, [showSignUp]);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { email, username, password } = formData;
        if ([username, email, password].some((field) => !field.trim())) {
            toast.error("Please enter all fields");
            return;
        }
        setLoader((prev) => ({ ...prev, signup: true }));
        try {
            await registerWithEmailAndPassword(username, email, password); // FIXME: Firebase signup
            const response = await axios.post("/users/signup", {
                username,
                email,
                password,
            });
            const { id, token } = response.data.data;
            saveUserSession({ email, id, token, username });
            toast.success(response?.data?.message || "Sign up successful");
            setLoginPopupVisibility(false);
        } catch (err) {
            console.error("Sign up error:", err);
            toast.error(
                err?.response?.data?.message ||
                    "Sign up failed. Please try again.",
            );
        } finally {
            setLoader((prev) => ({ ...prev, signup: false }));
        }
        setFormData(INITIAL_FORM_DATA);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        if ([email, password].some((field) => !field.trim())) {
            toast.error("Please enter email and password");
            return;
        }
        setLoader((prev) => ({ ...prev, login: true }));
        try {
            await logInWithEmailAndPassword(email, password); // FIXME: Firebase login
            const response = await axios.post("/users/login", {
                email,
                password,
            });
            const { token, username, id } = response.data.data;
            saveUserSession({ email, id, token, username });
            setLoginPopupVisibility(false);
            toast.success(response?.data?.message || "Login successful");
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. Please try again.");
            toast.error(
                error?.response?.data?.message ||
                    "Login failed. Please try again.",
            );
        } finally {
            setLoader((prev) => ({ ...prev, login: false }));
            setFormData(INITIAL_FORM_DATA);
        }
    };

    const handleFirebaseLogin = async () => {
        setLoader((prev) => ({ ...prev, firebaseLogin: true }));
        try {
            await signInWithGoogle();
            toast.success("Login with Google successful");
            setLoginPopupVisibility(false);
        } catch (error) {
            console.error("Firebase login failed:", error);
            toast.error("Firebase login failed. Please try again.");
        } finally {
            setLoader((prev) => ({ ...prev, firebaseLogin: false }));
        }
    };

    const { email, username, password } = formData;

    return (
        <div
            className="fixed z-10 w-full flex h-screen items-center justify-center overflow-y-auto bg-black bg-opacity-75"
            onClick={() => setLoginPopupVisibility(false)}
        >
            <div
                className="relative m-4 h-auto w-full max-w-md rounded-xl bg-white p-4 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-1 flex items-center justify-end">
                    <button
                        onClick={() => setLoginPopupVisibility(false)}
                        className="text-lg hover:text-red-700 md:text-2xl"
                    >
                        <IoMdCloseCircle />
                    </button>
                </div>

                <div className="mb-3 flex flex-col items-center gap-1">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <h1 className="text-2xl font-bold capitalize">
                        {showSignUp ? "Sign Up" : "Login"}
                    </h1>
                </div>

                <form onSubmit={showSignUp ? handleSignUp : handleLogin}>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="mt-1 w-full rounded border border-gray-300 p-1 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {showSignUp && (
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                className="mt-1 w-full rounded border border-gray-300 p-1 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    )}

                    <div className="relative mb-3">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="mt-1 w-full rounded border border-gray-300 p-1 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 pt-4 text-sm leading-5"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* 
                    {error && (
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                    )} */}

                    <button
                        type="submit"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 py-1 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={loader.signup || loader.login}
                    >
                        <span>{showSignUp ? "Sign Up" : "Login"}</span>
                        {(loader.signup || loader.login) && (
                            <Loader color="white" size={13} />
                        )}
                    </button>

                    <p className="m-1 text-center text-sm text-gray-500">
                        {showSignUp ? "or sign up with" : "or login with"}
                    </p>

                    <button
                        type="button"
                        className="flex w-full items-center justify-center gap-1 rounded-full bg-red-500 py-1 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                        onClick={handleFirebaseLogin}
                        disabled={loader.firebaseLogin}
                    >
                        {loader.firebaseLogin ? (
                            <Loader color="white" size={13} />
                        ) : (
                            <FaGoogle className="mr-2" />
                        )}
                        {showSignUp
                            ? "Sign Up with Google"
                            : "Login with Google"}
                    </button>

                    <div className="mt-2 flex flex-col gap-3">
                        {!showSignUp && (
                            <a
                                className="cursor-pointer text-left"
                                href="forget-password"
                            >
                                Forgot Password?
                            </a>
                        )}
                        <p
                            className="cursor-pointer text-center text-gray-500"
                            onClick={() => setShowSignUp((prev) => !prev)}
                        >
                            {showSignUp
                                ? "Already have an account? Login"
                                : "Don't have an account? Sign Up"}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
