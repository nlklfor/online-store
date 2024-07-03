import {observer} from "mobx-react-lite";
import {useAuthStore} from "../../stores/AuthStoreContext.tsx";
import './Account.scss';
import Root from "../../Routes/Root.tsx";
import {useNavigate} from "react-router-dom";

const Account = observer(() => {
    const authStore = useAuthStore();
    const navigate = useNavigate()

    if (!authStore.isAuth) {
        return <div>You are not logged in.</div>;
    }

    const {fullName, email, avatarUrl} = authStore.user;
    // const {logout} = authStore;
    const signOut = () => {
        authStore.user = null;
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <Root>
            <div className="account-container">
                <h1>Account Details</h1>
                <div className="account-details">
                    {avatarUrl ? <img className="avatar" src={avatarUrl} alt="Avatar"/> :
                        <img className="avatar" width={100}
                             src={'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                             alt="Avatar"/>}
                    <p><strong>Full Name:</strong> {fullName}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
                <button className={'signOut'} onClick={signOut}>Sign Out</button>
            </div>
        </Root>
    );
});

export default Account;
