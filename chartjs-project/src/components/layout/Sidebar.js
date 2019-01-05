import React from 'react'
import '../../App.css'

const Sidebar = () => {
    return (
        <nav>
            <div className="nav-box">
                <a href='#'>Home</a>
            </div>

            <div className="nav-box">
                <a href='#'>FPY</a>
            </div>

            <div className="nav-box">
                <a href='#'>$/Part</a>
            </div>

            <div className="nav-box">
                <a href='#'>Applied Direct Labor</a>
            </div>

            <div className="nav-box">
                <a href='#'>% Utilization</a>
            </div>
        </nav>
    )
}

export default Sidebar;