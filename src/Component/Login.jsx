import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthProvider } from '../Context/CreateContext';

const Login = () => {
        const [error, setError] = useState("")
        const {loginUser, setUser, signInWithGoogle} = use(AuthProvider)

        const handleLogin = e => {
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            loginUser(email, password)
            .then(result => {
                const currentUser = result.user
                setUser(currentUser)
            }).catch(error => {
                setError(error.message)
            })
        }

        const handleWithGoogle = () => {
            signInWithGoogle()
            .then(result => {
                const currentUser = result.user;
                setUser(currentUser)
            }).catch(error => {
                setError(error.message)
            })
        }

    return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <form onSubmit={handleLogin} className="fieldset space-y-1">
            <label className="label">Email</label>
            <input type="email" name="email" className="input bg-base-200 border-none" placeholder="Email" required />
            <label className="label">Password</label>
            <input type="password" name="password" className="input bg-base-200 border-none" placeholder="Password" required />
            <div>
              <a className="link link-hover hover:text-indigo-500">Forgot password?</a>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <button onClick={handleWithGoogle} type="button" className="btn mt-4 px-1 rounded-full"><img className="w-6" src="images/google.png" alt="" />
              <p>Continue with google</p>
            </button>
            <button type="button" className="btn mt-4 px-1 rounded-full"><img className="w-6" src="images/fb.png" alt="" />
              <p>Continue with Google</p>
            </button>
            <p className="font-semibold text-center pt-5">Don’t Have An Account ? <Link className="text-indigo-500" to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;