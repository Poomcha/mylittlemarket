import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
    return <>
        <main>{ children }</main>
        <Outlet />
    </>
}