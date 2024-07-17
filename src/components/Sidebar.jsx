import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">React Router Task</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/ai_content">AI</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/ui_ux">UI/UX</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/blockChain">Blockchain</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/development">Development</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/cyber_security">Cyber Security</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/cloud_computing">Cloud Computing</Link>
                </div>
            </div>
        </>

    )
}

export default Sidebar