import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastifyComponent(props) {
    const {
        headerMessage,
        paragraphMessage,
        buttonLabel,
        customClass,
        width,
        height,
        type
    } = props;

    const notify = () => toast(
        <div className="toast-content">
            <h4>{headerMessage}</h4>
            <h3>{paragraphMessage}</h3>
        </div>,
        {
            type
        }
    );

    return (
        <section>
            <div>
                <button onClick={notify} style={{ width, height }} className={customClass}>
                    {buttonLabel}
                </button>
                <ToastContainer position="top-center" newestOnTop />
            </div>
        </section>
    );
}

export default ToastifyComponent;
