import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import {register} from '../../../actions/auth'
import { useHistory } from 'react-router-dom'

import '../Auth.scss'

const Register = () => {
    const formData                      = { firstname:"", lastname:"", username:"",email:"",password:"", confirmpassword:"" };
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
           register(FormValue)
        )
        .then(() => {
            setSuccessful(true);
            history.push('/login')
        })
        .catch((err) => {
            setSuccessful(false);
        });
    };

    useEffect(() => {
        if(message !== undefined){
            setShow(true);
        }
    },[message]);

    
    // const validate = (values) => {
    //     const errors = {};
    //     const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if(!values.firstname){
    //         errors.firstname = " First Name is required";
    //     }
    //     if(!values.lastname){
    //         errors.lastname = " Last Name is required";
    //     }
    //     if(!values.username){
    //         errors.username = " Username is required";
    //     }
    //     if(!values.email){
    //         errors.email = " Email is required";
    //     } else if(!regex.test(values.email)){
    //         errors.email = " This is not a valid email format";
    //     }
    //     if(!values.password){
    //         errors.password = " Password is required";
    //     } else if(values.password.length < 6 ){
    //         errors.password = " Password must be more than 6 character";
    //     }
    //     if(!values.confirmpassword){
    //         errors.password = " Password is required";
    //     }else if( values.password !== values.confirmpassword){
    //         errors.confirmpassword = " Password Not Match";
    //     }
    //     return errors;
    // }
   
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
                                        <h1 className='d-inline'>Register App</h1>
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
                                                <label className="user">
                                                    <input type="text" name="firstname" id="firstname" component="input" placeholder="First Name" value={FormValue.firstname} onChange={handleChange}/>
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.firstname}</p>
                                                <label className="user">
                                                    <input type="text" name="lastname" placeholder="Last Name" id="lastname"  value={FormValue.lastname} onChange={handleChange}/>
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.lastname}</p>
                                                <label className="user">
                                                    <input type="text" name="username" placeholder="Username" id="username"  value={FormValue.username} onChange={handleChange}/>
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.username}</p>
                                                <label className="mail">
                                                    <input type="email" name="email" placeholder="Email" id="email" value={FormValue.email} onChange={handleChange} />
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.email}</p>
                                                <label className="pass">
                                                    <input type="password" name="password" placeholder="Password" id="password" value={FormValue.password} onChange={handleChange} />
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.password}</p>
                                                <label className="pass">
                                                    <input type="password" name="confirmpassword" placeholder="Konfirmasi Password" id="confirmpassword" value={FormValue.confirmpassword} onChange={handleChange} />
                                                </label>
                                                <p className='text-danger text-left'>{formErrors.confirmpassword}</p>
                                            </div>
                                            <button type="submit" className="form-btn">REGISTER</button>
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

export default Register