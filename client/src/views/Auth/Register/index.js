import React from 'react'
import '../Auth.scss'

const Register = () => {
    return (
        <div className="login-area mb-30">
            <div className="bg-image">
                <div className="login-signup">
                    <div className="container">
                        <div className="login-header mt-30">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="login-logo">
                                        {/* <img src="http://jskrishna.com/work/merkury/images/logo.png" alt="merkury_logo" className="img-responsive" /> */}
                                        <h1>REACT REGISTER</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="login" className="form">
                                <div className="login-inner">
                                    <div className="title">
                                        <h1>Welcome <span>back!</span></h1>
                                    </div>
                                    <div className="login-form">
                                        <form>
                                            <div className="form-details">
                                                <label className="user">
                                                    <input type="text" name="username" placeholder="Username" id="username" />
                                                </label>
                                                <label className="mail">
                                                    <input type="email" name="email" placeholder="Email" id="email" />
                                                </label>
                                                <label className="pass">
                                                    <input type="password" name="passsword" placeholder="Password" id="password" />
                                                </label>
                                                <label className="pass">
                                                    <input type="confirmPassword" name="confirmPassword" placeholder="Konfirmasi Password" id="confirmPassword" />
                                                </label>
                                            </div>
                                            <button type="submit" className="form-btn" onsubmit>REGISTER</button>
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