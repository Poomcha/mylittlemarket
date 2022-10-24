import {useEffect, useState, createContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const TelegramContext = createContext();

export default function PrivateRoute({ children }) {
    const telegram = window.Telegram.WebApp;
    const apiUrl = 'http://localhost:3001/';
    const { initData } = { ...telegram };

    const [safe, setSafe] = useState(undefined);

    useEffect(() => {
        fetch(`${apiUrl}login`, { headers: { data: `${initData}` } })
        .then((res) => {
            if (res.ok) {
                setSafe(true);
            } else {
                setSafe(false);
            }
        })
        .catch(() => setSafe(false));         
    });

    if(safe !== undefined) {
        if (safe) {
            return <>
                <TelegramContext.Provider>
                    {children}
                    <Outlet />
                </TelegramContext.Provider>                
            </>
        } else {
            return <Navigate to={'/unauthorized'} />
        }   
    }
}