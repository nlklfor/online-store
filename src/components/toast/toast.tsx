import './toast.scss'

type ToastTypes = {
    message: string;
    type: 'error' | 'success' | 'info';
    onClose: () => void;
}

const Toast = ({message, onClose, type}: ToastTypes) => {
    setTimeout(onClose, 3000);

    return (
        <div className={`toast toast-${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Toast;