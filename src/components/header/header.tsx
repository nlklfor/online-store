import './header.scss';
import instagram from '../../assets/instagram.svg';
import telegram from '../../assets/telegram.svg';
import cartImg from '../../assets/cart.svg';
import person from '../../assets/person.svg';
import favourite from '../../assets/favourite.svg';


import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useAuthStore } from '../../stores/AuthStoreContext';
import AuthModal from '../authModal/authModal.tsx';
import { useCartStore } from "../../stores/CartStore.ts";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const fullName = authStore.user?.fullName || '';
    const cart = cartStore.cartItems;
    const whishList = cartStore.wishlistItems;

    const showModal = useCallback(() => {
        setIsModalOpen(prevState => !prevState); // FIND OUT HOW IT WORKS!!!!
    }, []);


    return (
        <>
            <header className="header-section">
                <nav className="header-nav">
                    <div className={'header-nav-top'}>
                        <ul className={"header-social"}>
                            <li id={'instagram'}><img src={instagram} alt={'instagram'} /></li>
                            <li id={'telegram'}><img src={telegram} alt={'telegram'} /></li>
                        </ul>
                        <ul className={"header-btns"}>
                            <li className={'cart-btn'} id={'cart'}>
                                {authStore.isAuth ? (
                                    <Link to="/cart">
                                        <img width={25} height={25} src={cartImg} alt={'cart'} />
                                        {cart.length > 0 && (<div className={'cart-amount'}>{cart.length}</div>)}
                                    </Link>
                                ) : (
                                    <img width={25} height={25} src={cartImg} alt={'cart'}
                                        style={{ cursor: 'not-allowed' }} />
                                )}
                            </li>

                            {authStore.isAuth ? (
                                <Link to={'/account'}>
                                    <li className={'acc-btn'} id={'acc'}>
                                        <img width={25} height={25} src={person} alt={'account'} />
                                        <p className={'user-name'}>{fullName}</p>
                                    </li>
                                </Link>
                            ) : (
                                <li className={'acc-btn'} id={'acc'} onClick={showModal}>
                                    <img width={25} height={25} src={person} alt={'account'} />
                                </li>
                            )}
                            <li className={'fav-btn'} id={'fav'}>
                                {authStore.isAuth ? (
                                    <Link to="/wishlist">
                                        {whishList.length > 0 && <div className={'wishlist-amount'}>{whishList.length}</div>}
                                        <img width={25} height={25} src={favourite} alt={'favourite'} />
                                    </Link>
                                ) : (
                                    <img width={25} height={25} src={favourite} alt={'favourite'}
                                        style={{ cursor: 'not-allowed' }} />
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={'header-nav-bottom'}>
                        <ul className="header-links">
                            <li className="header-item">
                                <Link className="item-link" to={'/items?gender=Male'}>Male</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items?gender=Female'}>Female</Link>
                            </li>
                            <li className="header-item">
                                <Link className="item-link" to={'/items'}>Search</Link>
                            </li>
                        </ul>
                    </div>
                    <AuthModal isOpen={isModalOpen} showModal={showModal} />
                </nav>
            </header>
        </>
    );
});

export default Header;
