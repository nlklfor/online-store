import {useEffect} from 'react';
import './Checkout.scss';
import {useCartStore} from "../../stores/CartStore.ts";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Checkout = () => {

    const cartStore = useCartStore();
    const navigate = useNavigate();

    useEffect(() => {
    }, [cartStore.cartItems]);

    const handleCheckout = () => {
        cartStore.checkout();
        navigate('/');
    };

    const handleSendEmail = async () => {
        try {
            await axios.post('api/email');
            alert('Email was send successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        }
    };

    const totalPrice = cartStore.cartItems.reduce((total, item) => {
        return total + item.price * item.amount;
    }, 0); /// FIND OUT HOW IT WORKS!


    return (
        <div className="checkout-container">
            <header>
                <h1>Checkout</h1>
            </header>

            <main>
                <section className="cart-items">
                    <h2>Your Cart</h2>
                    <ul>
                        {cartStore.cartItems.map((item, key) => {
                            return (
                                <div key={key} className={'checkout-item'}>
                                    <img width={300} src={`${item.img_url[0]}`} className={'item-img'}
                                         alt={'item-img'}/>
                                    <h3 className={'item-title'}>{item.title}</h3><span> X{item.amount}</span>
                                    <h2 className={'item-price'}>{item.price}</h2>
                                </div>
                            )
                        })}
                    </ul>
                    <div className="total">
                        <h3>Total: UAH {totalPrice}</h3>
                    </div>
                </section>

                <aside className="payment-method">
                    <h2>Payment Method</h2>
                    <form onSubmit={handleCheckout}>
                        <label>
                            <input type="radio" name="payment" value="card" defaultChecked/>
                            Credit Card
                        </label>
                        <label>
                            <input type="radio" name="payment" value="paypal"/>
                            PayPal
                        </label>
                        <button onClick={handleSendEmail} type="submit">Complete Purchase
                        </button>
                    </form>
                </aside>
            </main>

            <footer>
                <p>&copy; 2024 NikiforHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Checkout;

