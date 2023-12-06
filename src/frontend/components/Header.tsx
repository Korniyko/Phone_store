import React from "react";
import './Header.scss'
import Logo from '../img/logo.svg'
import Button from "./Button";
import { Variation } from "../../types";
import { useHistory } from "react-router-dom";

type HeaderProps = {
    selected: Variation
}
const Header = ({ selected }: HeaderProps) => {

    const headerStyle = {
        background: selected.backgroundColorHeader,
    };
    
    const history = useHistory()

    return (
        <header style={headerStyle} >
            <div className="headers container">
                <div className="logo">
                    <img src={Logo} alt="logo"  onClick={() => { history.push('/')}}/>
                </div>
                <nav className="menu">
                    <ul className="menuList">
                        <li >
                            <a className="menuListItem" href="#">Info</a>
                        </li>
                        <li >
                            <a className="menuListItem" href="#">Product</a>
                        </li>
                        <li >
                            <a className="menuListItem" href="#">Contacts</a>
                        </li>
                        <li >
                            <Button label='Login' onClick={() => { history.push('/login')}} />
                        </li>
                        <li >
                            <Button label='Basket' onClick={() => { history.push('/basket')}} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;