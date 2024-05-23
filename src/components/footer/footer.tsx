import './footer.scss';

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
                                <p>Subscribe and get 10% off</p>
                                <div>
                                    <form>
                                        <input type="text" placeholder="example@gmail.com" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-social">
                        Social Links
                        <ul>
                            <li id="instagram"><img alt="instagram" /></li>
                            <li id="facebook"><img alt="facebook" /></li>
                        </ul>
                    </li>
                </ul>
                <h4 className={'footer-root'}>Multi-brand cloth store - DIPLOMA STORE @ 2024</h4>
            </footer>
        </>
    );
}

export default Footer;
