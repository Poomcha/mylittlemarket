import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{ children }</main>
            <Outlet />
        </>
    )
}