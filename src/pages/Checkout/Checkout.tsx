// import React, {useState} from 'react';
// import {observer} from 'mobx-react-lite';
// import {useCartStore} from "../../stores/CartStore";
// import './Checkout.scss';
// import {useNavigate} from 'react-router-dom';
//
// const Checkout = observer(() => {
//     const cartStore = useCartStore();
//     const navigate = useNavigate();
//     const [isShowModal, isSetShowModal] = useState(false);
//     const [cardInfo, setCardInfo] = useState({
//         cardNumber: '',
//         cardHolder: '',
//         expiryDate: '',
//         cvv: ''
//     });
//
//     const handleCheckout = async () => {
//         // Here you could add logic to handle the payment processing
//         await cartStore.checkout();
//         isSetShowModal(true);
//         setTimeout(() => {
//             isSetShowModal(false);
//             navigate('/');
//         }, 2000); // Modal will be displayed for 2 seconds before redirecting
//     };
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = e.target;
//         setCardInfo(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
//
//     return (
//         <>
//             <div className="container">
//                 <div className="window">
//                     <div className="order-info">
//                         <div className="order-info-content">
//                             <h2>Order Summary</h2>
//                             <div className="line"></div>
//                             {cartStore.cartItems.map(item => (
//                                 <div key={item._id}>
//                                     <table className="order-table">
//                                         <tbody>
//                                         <tr>
//                                             <td><img src={item.img_url[0]} className="full-width" alt={item.title}/>
//                                             </td>
//                                             <td>
//                                                 <br/>
//                                                 <span className="thin">{item.brand}</span>
//                                                 <br/>{item.title}<br/>
//                                                 <span
//                                                     className="thin small"> Color: {item.color}, Size: {item.size}<br/><br/></span>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>
//                                                 <div className="price">{item.price} {item.currency}</div>
//                                             </td>
//                                         </tr>
//                                         </tbody>
//                                     </table>
//                                     <div className="line"></div>
//                                 </div>
//                             ))}
//                             <div className="total">
//                                 <span style={{float: 'left'}}>
//                                     <div className="thin dense">VAT 19%</div>
//                                     <div className="thin dense">Delivery</div>
//                                     TOTAL
//                                 </span>
//                                 <span style={{float: 'right', textAlign: 'right'}}>
//                                     <div className="thin dense">{/* VAT calculation here */}</div>
//                                     <div className="thin dense">{/* Delivery fee here */}</div>
//                                         12999 UAH
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="credit-info">
//                         <div className="credit-info-content">
//                             <table className="half-input-table">
//                                 <tbody>
//                                 <tr>
//                                     <td>Please select your card:</td>
//                                     <td>
//                                         <div className="dropdown" id="card-dropdown">
//                                             <div className="dropdown-btn" id="current-card">Visa</div>
//                                             <div className="dropdown-select">
//                                                 <ul>
//                                                     <li>Master Card</li>
//                                                     <li>American Express</li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 </tbody>
//                             </table>
//                             <img src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
//                                  height="80" className="credit-card-image" id="credit-card-image" alt="Credit Card"/>
//                             Card Number
//                             <input className="input-field" name="cardNumber" value={cardInfo.cardNumber}
//                                    onChange={handleInputChange}/>
//                             Card Holder
//                             <input className="input-field" name="cardHolder" value={cardInfo.cardHolder}
//                                    onChange={handleInputChange}/>
//                             <table className="half-input-table">
//                                 <tbody>
//                                 <tr>
//                                     <td>Expires
//                                         <input className="input-field" name="expiryDate" value={cardInfo.expiryDate}
//                                                onChange={handleInputChange}/>
//                                     </td>
//                                     <td>CVC
//                                         <input className="input-field" name="cvv" value={cardInfo.cvv}
//                                                onChange={handleInputChange}/>
//                                     </td>
//                                 </tr>
//                                 </tbody>
//                             </table>
//                             <button className="pay-btn" onClick={handleCheckout}>Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//                 {isShowModal && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <p>Checkout successful!</p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// });
//
// export default Checkout;
