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

    // const [modalLogin , setModalLogin] = useState(false);
    const [modalReg, setModalReg] = useState(false)
    // const [showFullNameField, setShowFullNameField] = useState(false);

    const handleRegistrationClick = () => {
        setModalReg(!modalReg);
    };

    const onSubmit: SubmitHandler<FormTypes> = (values) => {
        if (modalReg) {
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
                        <h2>{modalReg ? "Registration" : "Authorization"}</h2>
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
                            {modalReg && (
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        {...register('fullName', {required: "Enter your Name"})}
                                    />
                                    {errors.fullName && <span className={'error-text'}>{errors.fullName.message}</span>}
                                </div>
                            )}
                            {!modalReg ? (<div className={'form-group'}>
                                <p>Don't have an account yet? <span onClick={handleRegistrationClick}
                                                                    className={'registration-link'}>Registration</span>
                                </p>
                            </div>) : (<div className={'form-group'}>
                                <p>Already have an account? <span onClick={handleRegistrationClick}
                                                                    className={'registration-link'}>Login</span>
                                </p>
                            </div>)}
                            <div className={'buttons-log'}>
                                <button type="submit"
                                        className="registration-button">{modalReg ? "Create an account" : "Login"}
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
