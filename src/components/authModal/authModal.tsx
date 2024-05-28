// src/AuthModal.js
import {useState} from 'react';
import './authModal.scss';


type AuthModalProps = {
    isOpen: boolean;
    showModal: () => void;
}

const AuthModal = ({isOpen, showModal}: AuthModalProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    return (
        <>
            {
                isOpen && <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={showModal} className="close-button">×</button>
                        <h2>Authorization</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe">Remember me</label>
                                <a href="#forgot-password" className="forgot-password">Forgot your password?</a>
                            </div>
                            <button type="submit" className="registration-button">Registration</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
        ;
};

export default AuthModal;
