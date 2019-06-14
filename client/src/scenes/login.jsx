import React from 'react';
import {Link} from 'react-router-dom';

const login = () => {
    return (
           <div className="login-body">
                    <div className="login-header-cnt">
                        <Link to='/' className='logo'>doctoo</Link>
                        <p>prise de rendez-vous chez un medecin, rapide et simple</p>
                    </div>
                    
                    <div className="login-cnt">
                        <h2>Login here</h2>
                        <div className="fcb-btn">
                            <a href="http://localhost:8080/auth/facebook" >
                                    <i className="fab fa-facebook-f"></i>
                                    <span className="fcb-btn-span" >Sign in with Facebook</span> 
                            </a>
                        </div>
                        <div className="ggl-btn">
                            <a href="/auth/google">
                                    <img alt="" src="https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png"/>
                                    <span className="ggl-btn-span">Sign in with Google</span> 
                            </a>
                        </div>
                        <span>ou</span>
                        <div className='login-local'>
                            <input type="email" name="email" placeholder='some@email.com' id="email"/>
                            <input type="password" name="pass" placeholder='secret' id="pass"/>
                            <button>Connexion</button>
                        </div>
                    </div>
            
        </div> 
    );
};

export default login;