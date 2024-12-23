import { useState, useEffect } from "react";
import Hero from "./hero";
import RegisterBanner from "../components/registerBanner";
import LoginPopup from "../components/loginPopUp";
import { useAuth } from "../contexts/authContext";
import { getToken } from "../utils/tokenService";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
    const { showLoginPopUp, handleLogout, setLoginPopupVisibility } = useAuth();
    const [registerModal, setRegisterModal] = useState(false);
    const closeRegisterModal = () => {
        setRegisterModal(false);
        localStorage.setItem("hasSeenRegisterBanner", "true");
    };

    useEffect(() => {
        const hasSeenRegisterBanner = localStorage.getItem(
            "hasSeenRegisterBanner",
        );

        if (!hasSeenRegisterBanner || hasSeenRegisterBanner !== "true") {
            setRegisterModal(true);
        } else {
            setRegisterModal(false);
        }

        const token = getToken();
        const hasShownLoginPopup = localStorage.getItem("hasShownLoginPopup");
        if (!token && hasShownLoginPopup !== "true") {
            handleLogout();
            setLoginPopupVisibility(true);
            localStorage.setItem("hasShownLoginPopup", "true"); // Set flag to avoid showing again
        }
    }, []);

    return (
        <div>
            {showLoginPopUp && <LoginPopup />}
            <Hero />
            {registerModal && (
                <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative mt-20 w-96 rounded-lg bg-white p-8 shadow-lg">
                        <button
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                            onClick={closeRegisterModal}
                        >
                            &times;
                        </button>
                        <RegisterBanner />
                    </div>
                </div>
            )}

            {/* <button
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
                title="Chat with us on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </button> */}
        </div>
    );
};

export default Home;
