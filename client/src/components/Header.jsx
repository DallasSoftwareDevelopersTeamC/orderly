import React from 'react'

function Header(){
    return (
        <div className='header-nav'>
            <nav>
                <h1 className='header-name'><a href="#">Orderly</a></h1>
                <ul className='nav-links'>
                    <li><a href="#" className='header-li-a'>Inventory</a></li>
                    <li><a href="#" className='header-li-a'>Orders</a></li>
                    <li><a href="#" className='header-li-a'>Settings</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header