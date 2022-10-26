import {useEffect, useState, createContext, useContext} from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading';

const getTelegramContext = () => window.Telegram

export const TelegramContext = createContext(getTelegramContext());

export default function PrivateRoute({ children }) {
    const Telegram = useContext(TelegramContext)
    const [safe, setSafe] = useState(undefined);

    const navigate = useNavigate();
    const location = useLocation();

    const apiUrl = 'http://localhost:3001/';
    const { initData } = { ...Telegram.WebApp };
    
    

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

        // App functionnality initialisation.
        Telegram.WebApp.BackButton.show();
        Telegram.WebApp.BackButton.onClick(() => {
            location !== '/' && navigate(-1)
        })

        return () => {
            Telegram.WebApp.BackButton.offClick();
        }

    });

    
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