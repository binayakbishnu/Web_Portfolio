import React from 'react'
import { Outlet } from 'react-router-dom'

function WebDevWrapper() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default WebDevWrapper