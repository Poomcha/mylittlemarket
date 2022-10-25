import {useEffect, useState, createContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loading from '../Loading/Loading';

const getTelegramContext = () => window.Telegram

export const TelegramContext = createContext(getTelegramContext());

export default function PrivateRoute({ children }) {
    const [Telegram, setTelegram] = useState(getTelegramContext())
    const apiUrl = 'http://localhost:3001/';
    const { initData } = { ...Telegram.WebApp };
    
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

    }, [initData]);

    Telegram.WebApp.BackButton.show();

    if(safe !== undefined) {
        if (safe) {
            return <>
                <TelegramContext.Provider value={Telegram}>
                    {children}
                    <Outlet />
                </TelegramContext.Provider>                
            </>
        } else {
            return <Navigate to={'/unauthorized'} />
        }   
    } else {
        return <Loading />
    }
}