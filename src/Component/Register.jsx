import React, { useState } from 'react';
import { Link } from 'react-router';

const Register = () => {
        const [nameError, setNameError] = useState("")
    return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">
            Register your account
          </h1>
          <form className="fieldset space-y-1">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your name"
              required
            />
            {
                nameError && <p className="text-xs text-secondary">{nameError}</p>
            }
            <label className="label">Phot URL</label>
            <input
              name="photo"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200 border-none"
              placeholder="Enter your email address"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200 border-none"
              placeholder="Enter your password"
              required
            />
            <label className="label mt-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Terms & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-indigo-500" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;