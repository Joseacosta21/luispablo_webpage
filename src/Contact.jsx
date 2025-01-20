import React from "react";
import { ReactSocialMediaIcons } from "react-social-media-icons";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p>Mi correo es:</p>
      <a href="mailto:luispablocorreo@gmail.com" className="my-2">luispablocorreo@gmail.com</a>
      <ReactSocialMediaIcons
        url="https://www.instagram.com/pablo_drette_art"
        backgroundColor="rgba(255,255,255,0)"
        iconColor="black"
        borderWidth="0"
        icon="instagram"
        className="my-2"
      />
    </div>
  );
};

export default Contact;
