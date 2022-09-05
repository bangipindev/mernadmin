import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../actions/auth';
import '../Auth.scss'

const Login = () => {
    const formData                      = { email:"", password:""};
    const [FormValue, setFormValue]     = useState(formData);
    const [formErrors]                  = useState({});
    const [successful,setSuccessful]    = useState(false);
    const [show , setShow]              = useState(false);
    const { message }                   = useSelector(state => state.Message);
    const dispatch                      = useDispatch();
    const history                       = useHistory();
    const handleChange = (e) => {
        const { name, value }           = e.target;
        setFormValue({ ...FormValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
           login(FormValue)
        )
        .then(() => {
            setSuccessful(true);
            history.push('/admin/home')
        })
        .catch((err) => {
            setSuccessful(false);
        });
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0){
            setShow(true);
        }
    },[formErrors]);

    return (
        <div className="login-area mb-30">
            <div className="bg-image">
                <div className="login-signup">
                    <div className="container">
                        <div className="login-header mt-30">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="login-logo">
                                        <img src="https://img.icons8.com/office/100/undefined/react.png" alt="merkury_logo" className="img-responsive" />
                                        <h1 className="d-inline"> Login App</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="login" className="form">
                                <div className="login-inner">
                                    {Object.keys(formErrors).length === 0 && successful ? (
                                        <ToastContainer className="p-3" position='bottom-end'>
                                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="success">
                                                <Toast.Header closeButton={false}>
                                                    <img
                                                        src="holder.js/20x20?text=%20"
                                                        className="rounded me-2"
                                                        alt=""
                                                    />
                                                </Toast.Header>
                                                <Toast.Body className="toast-success text-white">
                                                    {message}
                                                </Toast.Body>
                                            </Toast>
                                        </ToastContainer>
                                    ) : ( 
                                       ''
                                    )}
                                    <div className="login-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-details">
                                                <label className="mail">
                                                    <input type="text" name="email" placeholder="Email" id="email" value={FormValue.email} onChange={handleChange} />
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.email}</p>
                                                <label className="pass">
                                                    <input type="password" name="password" placeholder="Password" id="password" value={FormValue.password} onChange={handleChange} />
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.password}</p>
                                            </div>
                                            <button type="submit" className="form-btn">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login