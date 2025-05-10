import React, { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {
        const [error, setError] = useState("")
    return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <form className="fieldset space-y-1">
            <label className="label">Email</label>
            <input type="email" name="email" className="input bg-base-200 border-none" placeholder="Email" required />
            <label className="label">Password</label>
            <input type="password" name="password" className="input bg-base-200 border-none" placeholder="Password" required />
            <div>
              <a className="link link-hover hover:text-indigo-500">Forgot password?</a>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">Don’t Have An Account ? <Link className="text-indigo-500" to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;