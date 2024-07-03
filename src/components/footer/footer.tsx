import './footer.scss';
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";

function Footer() {
    return (
        <>
            <footer className="section-footer">
                <ul className="footer-links">
                    <li className="footer-info">
                        DiplomaStore
                        <ul>
                            <li>About our store</li>
                        </ul>
                    </li>
                    <li className="footer-faq">
                        FAQ
                        <ul>
                            <li>Payment</li>
                            <li>Delivery</li>
                            <li>Return</li>
                        </ul>
                    </li>
                    <li className="footer-subscription">
                        Subscription
                        <ul>
                            <li>
                                <div>
                                    <form>
                                        <input type="text" placeholder="example@gmail.com"/>
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-social">
                        Social Links
                        <ul>
                            <li id={'instagram'}><img src={instagram} alt={'instagram'}/></li>
                            <li id={'telegram'}><img src={telegram} alt={'telegram'}/></li>
                        </ul>
                    </li>
                </ul>
                <h4 className={'footer-root'}>Multi-brand cloth store - DIPLOMA STORE @ 2024</h4>
            </footer>
        </>
    );
}

export default Footer;
