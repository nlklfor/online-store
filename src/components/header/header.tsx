import './header.scss'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import cart from '../../assets/cart.svg'
import person from '../../assets/person.svg'
import favourite from '../../assets/star.svg'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header-section">
                <nav className="header-nav">
                    <div className={'header-nav-top'}>
                        <ul className={"header-social"}>
                            <li id={'instagram'}><img src={instagram} alt={'instagram'}/></li>
                            <li id={'facebook'}><img src={facebook} alt={'facebook'}/></li>
                        </ul>
                        <div className={'header-logo'}>
                            <Link to={'/'}><img className={'logo'} src={logo} alt={'Logo'}/></Link>
                        </div>
                        <ul className={"header-btns"}>
                            <li className={'cart-btn'} id={'cart'}><img src={cart} alt={'cart'}/></li>
                            <li className={'acc-btn'} id={'acc'}><img src={person} alt={'account'}/></li>
                            <li className={'fav-btn'} id={'fav'}><img src={favourite} alt={'favourite'}/></li>
                            <li className={'lang-btn'} id={'lang'}>
                                <select name="language" id="language">
                                    <option value="eng">Eng</option>
                                    <option value="ukr">Ukr</option>
                                    <option value="rus">Rus</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className={'header-nav-bottom'}>
                        <ul className="header-links">
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Men</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Women</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Kids</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}><span>SALE</span></Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Brands</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;