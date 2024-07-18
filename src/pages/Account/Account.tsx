import {observer} from "mobx-react-lite";
import {useAuthStore} from "../../stores/AuthStoreContext.tsx";
import './Account.scss';
import Root from "../../Routes/Root.tsx";
import {useNavigate} from "react-router-dom";
import {useCartStore} from "../../stores/CartStore.ts";

const Account = observer(() => {
    const authStore = useAuthStore();
    const cartStore = useCartStore()
    const navigate = useNavigate()
    const fullName = authStore.user?.fullName;
    const avatarUrl = authStore.user?.avatarUrl;
    const email = authStore.user?.email;

    const logOut = () => {
        authStore.logout();
        navigate('/');
    }

    return (
        <Root>
            {authStore.isAuth ? <div className="account-container">
                <h1>Account Details</h1>
                <div className="account-details">
                    {avatarUrl ? <img className="avatar" src={avatarUrl} alt="Avatar"/> :
                        <img className="avatar" width={100}
                             src={'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                             alt="Avatar"/>}
                    <p><strong>Full Name:</strong> {fullName}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <div>
                        <h2>Order history</h2>
                        {!cartStore.orderHistory ? cartStore.orderHistory : `You didn't make any purchases yet`}
                    </div>
                </div>
                <button className={'signOut'} onClick={logOut}>Sign Out</button>
            </div> : <div>You are not logged in.</div>}
        </Root>
    );
});

export default Account;
