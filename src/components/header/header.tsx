import './header.scss'

function Header() {
    return (
        <>
            <header className="header-section">
                <nav className="header-nav">
                    <div className={'header-nav-top'}>
                        <ul className={"header-social"}>
                            <li id={'instagram'}><img alt={'instagram'}/></li>
                            <li id={'facebook'}><img alt={'facebook'}/></li>
                        </ul>
                        <div className={'header-logo'}>
                            <a className="logo" href="index.html">
                                <span>
                                  diplomaStore
                                </span>
                            </a>
                        </div>
                        <ul className={"header-btns"}>
                            <li className={'cart-btn'} id={'cart'}><img alt={'cart'}/></li>
                            <li className={'acc-btn'} id={'acc'}><img alt={'account'}/></li>
                            <li className={'fav-btn'} id={'fav'}><img alt={'favourite'}/></li>
                            <li className={'callback-btn'} id={'callback'}><img alt={'callback'}/></li>
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
                                <a className="item-link" href="index.html">SALE</a>
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