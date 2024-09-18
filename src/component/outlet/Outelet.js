import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Outelet = () => {
    return (
        <div>
            <h2> This is outlate page </h2>
            <ul>
            <li><Link className="dropdown-item" to="comapny">comapny</Link></li>
            <li><Link className="dropdown-item" to="gov">gov</Link></li>
            <li><Link className="dropdown-item" to="worldgov">worldgov</Link></li>
            <hr />
            <Outlet/>
            </ul>
        </div>
    )
}

export default Outelet
