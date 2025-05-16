'use client';

import { signOut } from "next-auth/react";
import React from "react";

interface ButtonProps{
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const LogoutButton = ({ children = 'Sair', className, onClick }: ButtonProps) => {
    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach((cookie) => {
            document.cookie = cookie
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        signOut({ callbackUrl: "/" });
    }

    return (
        <button
            className={className}
            onClick={handleLogout}
        >
            {children}
        </button>
    );
}