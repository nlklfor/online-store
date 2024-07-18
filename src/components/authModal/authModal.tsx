import {useEffect, useState} from 'react';
import './authModal.scss';
import {SubmitHandler, useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import {useAuthStore} from "../../stores/AuthStoreContext";

type AuthModalProps = {
    isOpen: boolean;
    showModal: () => void;
}

interface FormTypes {
    email: string;
    password: string;
    fullName?: string;
}

const AuthModal = observer(({isOpen, showModal}: AuthModalProps) => {
    const authStore = useAuthStore();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "email@toha.klass",
            password: "123456",
            fullName: ""
        }
    });

    const [showFullNameField, setShowFullNameField] = useState(false);

    const handleRegistrationClick = () => {
        setShowFullNameField(!showFullNameField);
    };

    const onSubmit: SubmitHandler<FormTypes> = (values) => {
        if (showFullNameField) {
            authStore.register(values.email, values.password, values.fullName!);
        } else {
            authStore.login(values.email, values.password);
        }
        console.log(values)
    }

    if (authStore.isAuth) {
        isOpen = false;
    }
    useEffect(() => {
        if (authStore.isAuth) {
            showModal();
        }
    }, [authStore.isAuth, showModal]);


    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={showModal} className="close-button">×</button>
                        <h2>{showFullNameField ? "Registration" : "Authorization"}</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', {required: "Enter your email"})}
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', {required: "Enter your password"})}
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            {showFullNameField && (
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        {...register('fullName', {required: "Enter your Name"})}
                                    />
                                    {errors.fullName && <span>{errors.fullName.message}</span>}
                                </div>
                            )}
                            <div className={'buttons-log'}>
                                <button className={'registration'}
                                        onClick={handleRegistrationClick}>{!showFullNameField ? "Create an account" : "Login"}
                                </button>
                                <button type="submit"
                                        className="registration-button">{showFullNameField ? "Create an account" : "Login"}
                                </button>
                            </div>
                            {authStore.error && <p className="error">{authStore.error}</p>}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
});

export default AuthModal;
