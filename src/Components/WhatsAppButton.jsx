import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    //  WhatsApp number and message
    const phoneNumber = "2348114933065";
    const message = "Hello, I'd like to know more about Revomedia flag Production!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      }}
      onClick={handleWhatsAppClick}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp style={{ color: "#fff", fontSize: "30px" }} />
    </div>
  );
};

export default WhatsAppButton;
