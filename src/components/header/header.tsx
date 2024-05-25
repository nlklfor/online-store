import './header.scss'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import cart from '../../assets/cart.svg'
import person from '../../assets/person.svg'
import envelope from '../../assets/envelope.svg'
import favourite from '../../assets/star.svg'
import logo from '../../assets/logo.png'

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
                            <a className="logo" href="index.html">
                                <img src={logo} alt={'Logo'}/>
                            </a>
                        </div>
                        <ul className={"header-btns"}>
                            <li className={'cart-btn'} id={'cart'}><img src={cart} alt={'cart'}/></li>
                            <li className={'acc-btn'} id={'acc'}><img src={person} alt={'account'}/></li>
                            <li className={'fav-btn'} id={'fav'}><img src={favourite} alt={'favourite'}/></li>
                            <li className={'callback-btn'} id={'callback'}><img src={envelope} alt={'callback'}/></li>
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
                                <a className="item-link" href="index.html">Men</a>
                            </li>
                            <li className="header-item">
                                <a className="item-link" href="index.html">Women</a>
                            </li>
                            <li className="header-item">
                                <a className="item-link" href="index.html">Kids</a>
                            </li>
                            <li className="header-item">
                                <a className="item-link" href="index.html"><span>SALE</span></a>
                            </li>
                            <li className="header-item">
                                <a className="item-link" href="index.html">Brands</a>
                            </li>
                            <li className="header-item">
                                <a className="item-link" href="index.html">Search</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;