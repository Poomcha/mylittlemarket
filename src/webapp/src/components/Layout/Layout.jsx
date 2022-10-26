import './Layout.css'

import { Outlet } from 'react-router-dom'

import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <main className='main'>
                { children }
                <Outlet />
            </main>
        </>
    )
}