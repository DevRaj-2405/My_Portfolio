import React from 'react';
import { FaBars ,FaReact } from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';


const data = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Resume',
        path: '/resume'
    },
    {
        label: 'Portfolio',
        path: '/portfolio'
    },
    {
        label: 'Skills',
        path: '/skills'
    },
    {
        label: 'Contact',
        path: '/contact'
    }
];

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = React.useState(false);


    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">

                    <Link to="/" className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>

                </div>

                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li
                            key={key}
                            className="navbar__container__menu__item"
                        >
                            <Link
                                className="navbar__container__menu__item__links"
                                to={item.path}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>

                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
