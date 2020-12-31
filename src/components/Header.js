import React from 'react';

const Header = (props) => {
    const { branding } = props;
    return (
        <div>
           <h1>{branding}</h1> 
        </div>
    )
}


export default Header;