import React from "react";
import qr from "../assets/shared image.png";

const FixedButton = () => {
    const handleClick = () => {
        window.location.href =
            "https://share.hsforms.com/1mLYbHd-VRg6dA-xATnLLpgr6to4"; // Google Form URL
    };

    return (
        <button onClick={handleClick} style={styles.button}>
            Register for webinar
        </button>
    );
};

const styles = {
    button: {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        padding: "12px 24px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "50px", // Makes the button rounded
        cursor: "pointer",
        zIndex: 1000,
        fontFamily: '"Roboto", sans-serif', // Font style
        fontSize: "16px", // Font size
        fontWeight: "bold", // Font weight
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
        transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transition
    },
    buttonHover: {
        backgroundColor: "#0056b3",
        transform: "scale(1.05)", // Slightly scales up the button on hover
    },
};

export default FixedButton;
