import React from 'react'

function SidebarComponent({icon, text}) {
    return (
        <div>
            {icon}
            <h1>{text}</h1>
        </div>
    )
}

export default SidebarComponent
