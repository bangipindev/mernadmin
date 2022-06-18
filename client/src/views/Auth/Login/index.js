import React from 'react'
import '../Auth.scss'

const Login = () => {
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
                                        <h1>REACT LOGIN</h1>
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
                                                <label className="pass">
                                                    <input type="password" name="passsword" placeholder="Password" id="password" />
                                                </label>
                                            </div>
                                            <button type="submit" className="form-btn" onsubmit>Login</button>
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