import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tokenFromURL = new URLSearchParams(window.location.search).get("token");
    const storedToken = localStorage.getItem("token");

    let finalToken = tokenFromURL || storedToken;

        if (finalToken) {
            try {
                const decoded = jwtDecode(finalToken);
                localStorage.setItem("token", finalToken);
                setUser({ ...decoded, token: finalToken });
                // Clean token from URL so it doesn't re-apply on refresh
        if (tokenFromURL) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
            } catch (err) {
                console.error("Invalid token", err);
                localStorage.removeItem("token");
            }
            }
            setLoading(false); // ✅ finish loading
        }, []);
        if (loading) return <div className="text-white p-10">Loading...</div>;

    return(
        <AuthContext.Provider value = {{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}