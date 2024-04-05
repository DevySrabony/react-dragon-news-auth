import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const LogIn = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogIn = e =>{
        e.preventDefault () ;
        const form = new FormData(e.currentTarget)
        const email = form.get('email') 
        const password = form.get('password')

        signIn(email ,password) 
        .then(result =>{
            console.log(result.user)
            navigate(location?.state?location.state :'/')
        })
        .catch(error =>{
            console.error(error)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
        <div>
            <h2 className='text-3xl my-10 text-center'>Please LogIn</h2>
            <form onSubmit={handleLogIn} className="card-body md:w-3/12 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center mt-4'>Do not have an account?Please <Link className='text-blue-800 font-bold' to="/register">Register</Link></p>
        </div>
        </div>
    );
};

export default LogIn;