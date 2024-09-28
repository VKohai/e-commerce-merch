import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, className }) => {
    const mount = document.getElementById("portal");
    const el = document.createElement("div");
    el.className = className;

    useEffect(() => {
        mount.appendChild(el);
        return () => mount.removeChild(el);
    }, [el, mount]);

    return createPortal(children, el)
};

export default Portal;