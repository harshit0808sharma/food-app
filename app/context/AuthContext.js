'use client'
import { useRouter } from 'next/navigation';
import { useState, createContext, useContext, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

     useEffect(()=> {
        const storedUser = localStorage.getItem('currentUser');
        if(storedUser){
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('currentUser', JSON.stringify(userData));
        setUser(userData);
        setIsLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
        setIsLoggedIn(false);
        // setLogin(false);
        alert("You have been logged out.");
        router.push('/restaurant');
    }

    const deleteAllUsers = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all users?");
        if(confirmDelete){
            localStorage.removeItem('allUsers');
            localStorage.removeItem('currentUser');
            setUser(null);
            setIsLoggedIn(false);
            alert('Your All Accounts have been Delelted.');
            router.push('/restaurant');
        }
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, deleteAllUsers }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
