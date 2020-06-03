import React from 'react';


function Header({ title, navLinks }) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
            
                <span className="a">Nav</span>
                {navLinks.map((link) => (
                    <a href={link.link} className='link dim gray b f6 f5-ns dib mr3'>{link.name}</a>
                ))}

            </nav>
        </header>
    );
}

export default Header;